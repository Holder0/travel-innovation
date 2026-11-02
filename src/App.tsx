import { useEffect, useMemo, useState } from "react"
import type {
  Page,
  CartItem,
  PurchaseItem,
  TravelerData,
  PaymentDetails,
  CatalogFilterState,
  PackageItem,
  PersonalInfo,
  SupportTicket,
  SearchFilters,
  UserAccountData,
  FavoriteItem,
  AppCurrentUser,
} from "./types"
import { DEFAULT_CATALOG_FILTERS } from "./types"
import { packages } from "./data/packagesData"
import {
  generateBookingCode,
  getRegisteredUsers,
  saveRegisteredUsers,
  getStoredAccounts,
  saveStoredAccounts,
  getStoredCheckoutSession,
  saveStoredCheckoutSession,
  clearStoredCheckoutSession,
  DEFAULT_PERSONAL_INFO,
  DEFAULT_PAYMENT_DATA,
} from "./services/storage"
import {
  saveReservationToSupabase,
  fetchPackagesFromSupabase,
  signOutWithSupabase,
  getCurrentSupabaseUser,
  fetchUserReservationsFromSupabase,
  updateSupabaseProfile,
} from "./services/supabaseService"
import { supabase } from "./services/supabaseClient"


import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { PartyIcon, HeartIcon } from "./components/common/SvgIcons"
import { AuthModal } from "./components/modals/AuthModal"
import { ProfileModal } from "./components/modals/ProfileModal"
import { StateDiagram } from "./components/diagram/StateDiagram"

import { Home } from "./pages/Home"
import { Catalog } from "./pages/Catalog"
import { Detail } from "./pages/Detail"
import { Cart } from "./pages/checkout/Cart"
import { Identification } from "./pages/checkout/Identification"
import { Travelers } from "./pages/checkout/Travelers"
import { Payment } from "./pages/checkout/Payment"
import { Confirmation } from "./pages/checkout/Confirmation"
import { Reservations } from "./pages/Reservations"
import { Policies } from "./pages/Policies"
import { Support } from "./pages/Support"
import { Tickets } from "./pages/Tickets"
import { Favorites } from "./pages/Favorites"

const CHECKOUT_STEPS: Page[] = ["carrito", "identificacion", "viajeros", "pago"]

export default function App() {
  const initialCheckoutSession = useMemo(() => getStoredCheckoutSession(), [])

  const [activeCheckoutStep, setActiveCheckoutStep] = useState<Page>(
    () => initialCheckoutSession?.activeStep || "carrito"
  )
  const [page, setPage] = useState<Page>("inicio")
  const [previousPage, setPreviousPage] = useState<Page>("catalogo")
  const [cartItems, setCartItems] = useState<CartItem[]>(
    () => initialCheckoutSession?.cartItems || []
  )
  const [purchases, setPurchases] = useState<PurchaseItem[]>([])
  const [lastPurchasedItems, setLastPurchasedItems] = useState<CartItem[]>([])
  const [lastPurchasedTravelers, setLastPurchasedTravelers] = useState<TravelerData[]>([])
  const [lastPurchasedPayment, setLastPurchasedPayment] = useState<PaymentDetails | null>(null)
  const [catalogFilters, setCatalogFilters] = useState<CatalogFilterState>(
    DEFAULT_CATALOG_FILTERS,
  )

  const handleUpdateFilters = (
    updater:
      | Partial<CatalogFilterState>
      | ((prev: CatalogFilterState) => CatalogFilterState)
  ) => {
    setCatalogFilters((prev) =>
      typeof updater === "function" ? updater(prev) : { ...prev, ...updater }
    )
  }
  const [packagesList, setPackagesList] = useState<PackageItem[]>(packages)
  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(
    packages[4],
  )

  // Carga de paquetes e itinerarios desde Supabase con respaldo local
  useEffect(() => {
    let isMounted = true
    async function loadCloudPackages() {
      try {
        const cloudData = await fetchPackagesFromSupabase()
        if (isMounted && cloudData && cloudData.length > 0) {
          const cloudMap = new Map(cloudData.map((c) => [c.id, c]))
          const cloudByName = new Map(cloudData.map((c) => [c.name.toLowerCase().trim(), c]))

          const merged = packages.map((p) => {
            const fromCloud = cloudMap.get(p.id) || cloudByName.get(p.name.toLowerCase().trim())
            if (!fromCloud) return p
            return {
              ...p,
              ...fromCloud,
              itinerary:
                fromCloud.itinerary && fromCloud.itinerary.length > 0
                  ? fromCloud.itinerary
                  : p.itinerary,
              availableDates:
                fromCloud.availableDates && fromCloud.availableDates.length > 0
                  ? fromCloud.availableDates
                  : p.availableDates,
            }
          })

          // Incluir paquetes adicionales creados exclusivamente en Supabase
          cloudData.forEach((c) => {
            if (
              !packages.some(
                (p) =>
                  p.id === c.id || p.name.toLowerCase().trim() === c.name.toLowerCase().trim()
              )
            ) {
              merged.push(c)
            }
          })

          setPackagesList(merged)
          setSelectedPackage((prev) => {
            const match = merged.find(
              (p) => p.id === prev.id || p.name === prev.name,
            )
            return match || prev
          })
        }
      } catch (err) {
        console.warn("Fallback local activo para paquetes:", err)
      }
    }
    loadCloudPackages()
    return () => {
      isMounted = false
    }
  }, [])

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<AppCurrentUser | null>(null)

  // Restaurar sesión de Supabase Auth si existe al cargar
  useEffect(() => {
    let isMounted = true
    async function restoreSession() {
      try {
        const user = await getCurrentSupabaseUser()
        if (isMounted && user) {
          setCurrentUser(user)
          // Sincronizar compras y reservas activas desde Supabase
          const cloudPurchases = await fetchUserReservationsFromSupabase(user.id, user.email)
          if (isMounted && cloudPurchases && cloudPurchases.length > 0) {
            setPurchases(cloudPurchases)
          }
        }
      } catch (e) {
        console.warn("Aviso al restaurar sesión activa:", e)
      }
    }
    restoreSession()
    return () => {
      isMounted = false
    }
  }, [])

  const [accountCreatedToast, setAccountCreatedToast] = useState<string | null>(null)


  useEffect(() => {
    if (accountCreatedToast) {
      const timer = setTimeout(() => setAccountCreatedToast(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [accountCreatedToast])

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(
    () => initialCheckoutSession?.personalInfo || DEFAULT_PERSONAL_INFO
  )

  const [travelersList, setTravelersList] = useState<TravelerData[]>(
    () => initialCheckoutSession?.travelersList || []
  )

  const [paymentData, setPaymentData] = useState<PaymentDetails>(
    () => initialCheckoutSession?.paymentData || DEFAULT_PAYMENT_DATA
  )

  const [confirmedBookingCode, setConfirmedBookingCode] = useState(() =>
    generateBookingCode()
  )

  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([])
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [favoriteToast, setFavoriteToast] = useState<{ isAdd: boolean; text: string } | null>(null)

  const handleCreateTicket = (ticket: SupportTicket) => {
    setSupportTickets((prev) => [ticket, ...prev])
  }

  // Sync personal info when user changes
  useEffect(() => {
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const accounts = getStoredAccounts()
      const savedInfo = accounts[emailKey]?.savedPersonalInfo
      setPersonalInfo((prev) => ({
        ...prev,
        fullName: prev.fullName || currentUser.name,
        email: prev.email || currentUser.email,
        phone: prev.phone || savedInfo?.phone || "",
        cedula: prev.cedula || savedInfo?.cedula || "",
        birthDate: prev.birthDate || savedInfo?.birthDate || "",
        province: prev.province || savedInfo?.province || "",
        city: prev.city || savedInfo?.city || "",
        mainStreet: prev.mainStreet || savedInfo?.mainStreet || "",
        secondaryStreet: prev.secondaryStreet || savedInfo?.secondaryStreet || "",
        reference: prev.reference || savedInfo?.reference || "",
      }))
    }
  }, [currentUser])

  // Sync active user cart, purchases, and favorites to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const existingAcc = currentAccounts[emailKey]
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          ...(existingAcc || { cart: [], purchases: [] }),
          cart: cartItems,
          purchases: purchases,
          favorites: favorites,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }
  }, [cartItems, purchases, currentUser, favorites])

  const handleSavePersonalInfo = (info: PersonalInfo, saveToAccount = true) => {
    setPersonalInfo(info)
    if (currentUser && saveToAccount) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          ...(currentAccounts[emailKey] || { cart: [], purchases: [] }),
          savedPersonalInfo: info,
        },
      }
      saveStoredAccounts(updatedAccounts)

      // Sincronizar perfil con Supabase si el usuario tiene ID de base de datos
      if (currentUser.id) {
        updateSupabaseProfile(currentUser.id, {
          fullName: info.fullName,
          phone: info.phone,
          idNumber: info.cedula,
          province: info.province,
          city: info.city,
          address: info.mainStreet
            ? `${info.mainStreet} y ${info.secondaryStreet || ""} (${info.reference || ""})`.trim()
            : undefined,
        }).catch((err) => console.warn("Aviso al sincronizar perfil con la nube:", err))
      }
    }
  }

  const handleLoginSuccess = (user: AppCurrentUser) => {
    const currentAccounts = getStoredAccounts()
    const emailKey = user.email.trim().toLowerCase()
    const existing = currentAccounts[emailKey]

    const regUsers = getRegisteredUsers()
    const regRecord = regUsers[emailKey]
    const regFullName = regRecord ? regRecord.fullName : user.name

    if (existing) {
      // Account exists: restore that account's cart, purchases, personal info, and favorites
      let mergedCart = [...(existing.cart || []), ...cartItems]
      setCartItems(mergedCart)
      setPurchases(existing.purchases || [])
      setFavorites(existing.favorites || [])

      if (existing.savedPersonalInfo) {
        setPersonalInfo({
          ...existing.savedPersonalInfo,
          fullName: regFullName,
          email: user.email,
          phone: user.phone || existing.savedPersonalInfo.phone,
          province: user.province || existing.savedPersonalInfo.province,
          city: user.city || existing.savedPersonalInfo.city,
          cedula: user.idNumber || existing.savedPersonalInfo.cedula,
        })
      } else {
        setPersonalInfo({
          fullName: regFullName,
          email: user.email,
          phone: user.phone || "",
          cedula: user.idNumber || "",
          birthDate: "",
          province: user.province || "",
          city: user.city || "",
          mainStreet: "",
          secondaryStreet: "",
          reference: "",
        })
      }

      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: mergedCart,
          purchases: existing.purchases || [],
          savedPersonalInfo: existing.savedPersonalInfo
            ? { ...existing.savedPersonalInfo, fullName: regFullName, email: user.email }
            : undefined,
          favorites: existing.favorites || [],
        },
      }
      saveStoredAccounts(updatedAccounts)
    } else {
      // Brand new account created: assign own isolated cart, empty purchases, empty personal info, empty favorites
      const initialCart = [...cartItems]
      const newAccountData: UserAccountData = {
        cart: initialCart,
        purchases: [],
        savedPersonalInfo: undefined,
        favorites: [],
      }
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: newAccountData,
      }
      saveStoredAccounts(updatedAccounts)
      setCartItems(initialCart)
      setPurchases([])
      setFavorites([])
      setPersonalInfo({
        fullName: regFullName,
        email: user.email,
        phone: user.phone || "",
        cedula: user.idNumber || "",
        birthDate: "",
        province: user.province || "",
        city: user.city || "",
        mainStreet: "",
        secondaryStreet: "",
        reference: "",
      })
      setAccountCreatedToast(
        `¡Cuenta creada con éxito! Bienvenido a Travel Innovation, ${regFullName.split(" ")[0] || "viajero"}.`
      )
    }

    setCurrentUser({
      id: user.id,
      name: regFullName,
      email: user.email,
      role: user.role || "CLIENTE",
      phone: user.phone,
      province: user.province,
      city: user.city,
      idNumber: user.idNumber,
    })

    // Sincronizar reservas del usuario desde la base de datos Supabase
    fetchUserReservationsFromSupabase(user.id, user.email)
      .then((cloudPurchases) => {
        if (cloudPurchases && cloudPurchases.length > 0) {
          setPurchases(cloudPurchases)
        }
      })
      .catch((err) => console.warn("Aviso al consultar reservas de la nube:", err))

    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    signOutWithSupabase()
    // When logging out: persist current account cart, purchases, personal info, and favorites

    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: cartItems,
          purchases: purchases,
          savedPersonalInfo: personalInfo,
          favorites: favorites,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }

    // Reset session states for fresh guest or next user
    setCurrentUser(null)
    setFavorites([])
    setCartItems([])
    setPurchases([])
    setLastPurchasedItems([])
    setLastPurchasedTravelers([])
    setLastPurchasedPayment(null)
    setPersonalInfo({
      fullName: "",
      email: "",
      phone: "",
      cedula: "",
      birthDate: "",
      province: "",
      city: "",
      mainStreet: "",
      secondaryStreet: "",
      reference: "",
    })
    setTravelersList([])
    setSupportTickets([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
    clearStoredCheckoutSession()
    setActiveCheckoutStep("carrito")
    go("inicio")
  }

  const handleAddToCart = (item: {
    pkg: PackageItem
    date: string
    people: number
    total: number
  }) => {
    const newItem: CartItem = {
      id: `${item.pkg.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...item,
    }
    // Cada paquete agregado se almacena como una reserva individual, permitiendo múltiples del mismo tipo
    setCartItems((prev) => [...prev, newItem])
    setActiveCheckoutStep("carrito")

    // Requirement 2: Ensure any subsequent purchase has fresh blank travelers and payment data
    setTravelersList([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
  }

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => {
      const next = prev.filter((item) => item.id !== id)
      if (next.length === 0) {
        setActiveCheckoutStep("carrito")
        clearStoredCheckoutSession()
      }
      return next
    })
    setTravelersList([])
  }

  const handleToggleFavorite = (packageId: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true)
      return
    }
    const isFav = favorites.some((f) => f.packageId === packageId)
    const pkg = packages.find((p) => p.id === packageId)
    const pkgName = pkg?.name || "Paquete turístico"

    if (isFav) {
      setFavorites((prev) => prev.filter((f) => f.packageId !== packageId))
      setFavoriteToast({ isAdd: false, text: `"${pkgName}" se quitó de tus favoritos.` })
    } else {
      setFavorites((prev) => [{ packageId, addedAt: Date.now() }, ...prev])
      setFavoriteToast({ isAdd: true, text: `"${pkgName}" se guardó en tus favoritos.` })
    }
    setTimeout(() => setFavoriteToast(null), 3500)
  }

  const handleRemoveFavorite = (packageId: string) => {
    const pkg = packages.find((p) => p.id === packageId)
    const pkgName = pkg?.name || "Paquete turístico"
    setFavorites((prev) => prev.filter((f) => f.packageId !== packageId))
    setFavoriteToast({ isAdd: false, text: `"${pkgName}" se quitó de tus favoritos.` })
    setTimeout(() => setFavoriteToast(null), 3500)
  }

  const handleAddToCartFromFavorites = (pkg: PackageItem) => {
    const defaultDate =
      pkg.availableDates && pkg.availableDates.length > 0
        ? pkg.availableDates[0]
        : pkg.datesText
    handleAddToCart({
      pkg,
      date: defaultDate,
      people: 1,
      total: pkg.price,
    })
  }

  const handleUpdateCartItemPeople = (id: string, newPeople: number) => {
    const validPeople = Math.min(20, Math.max(1, newPeople))
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              people: validPeople,
              total: validPeople * item.pkg.price,
            }
          : item
      )
    )
    setTravelersList([])
  }

  const handleUpdateUserEmail = (oldEmail: string, newEmail: string) => {
    const oldKey = oldEmail.trim().toLowerCase()
    const newKey = newEmail.trim().toLowerCase()
    if (oldKey === newKey) return

    // 1. Update Registered Users registry
    const regUsers = getRegisteredUsers()
    if (regUsers[oldKey]) {
      const existingRecord = regUsers[oldKey]
      delete regUsers[oldKey]
      regUsers[newKey] = {
        ...existingRecord,
        email: newEmail.trim(),
      }
      saveRegisteredUsers(regUsers)
    }

    // 2. Update Accounts storage (cart, purchases, savedPersonalInfo, favorites)
    const currentAccounts = getStoredAccounts()
    if (currentAccounts[oldKey]) {
      const existingAccount = currentAccounts[oldKey]
      delete currentAccounts[oldKey]
      currentAccounts[newKey] = {
        ...existingAccount,
        savedPersonalInfo: existingAccount.savedPersonalInfo
          ? { ...existingAccount.savedPersonalInfo, email: newEmail.trim() }
          : undefined,
      }
      saveStoredAccounts(currentAccounts)
    }

    // 3. Update active session states
    if (currentUser) {
      setCurrentUser({ name: currentUser.name, email: newEmail.trim() })
    }
    setPersonalInfo((prev) => ({ ...prev, email: newEmail.trim() }))
  }

  const handleUpdateUserName = (newName: string) => {
    if (!currentUser) return
    const emailKey = currentUser.email.trim().toLowerCase()

    // 1. Update Registered Users registry
    const regUsers = getRegisteredUsers()
    if (regUsers[emailKey]) {
      regUsers[emailKey].fullName = newName.trim()
      saveRegisteredUsers(regUsers)
    }

    // 2. Update active session states
    setCurrentUser((prev) => (prev ? { ...prev, name: newName.trim() } : null))
    setPersonalInfo((prev) => ({ ...prev, fullName: newName.trim() }))
  }

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.total, 0)
  }, [cartItems])

  const go = (next: Page) => {
    if (next === "detalle") {
      setPreviousPage(page)
    }
    if (CHECKOUT_STEPS.includes(next)) {
      setActiveCheckoutStep(next)
    }
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleGoToCart = () => {
    if (cartItems.length > 0 && CHECKOUT_STEPS.includes(activeCheckoutStep)) {
      go(activeCheckoutStep)
    } else {
      go("carrito")
    }
  }

  // Persist checkout session continuously to localStorage
  useEffect(() => {
    if (page === "confirmacion") {
      clearStoredCheckoutSession()
      return
    }

    if (cartItems.length > 0) {
      saveStoredCheckoutSession({
        activeStep: activeCheckoutStep,
        cartItems,
        personalInfo,
        travelersList,
        paymentData,
      })
    } else {
      clearStoredCheckoutSession()
    }
  }, [activeCheckoutStep, cartItems, personalInfo, travelersList, paymentData, page])

  const handleSearch = (filters: SearchFilters) => {
    setCatalogFilters({
      region: filters.region || "",
      category: filters.category || "",
      province: filters.province || "",
      city: filters.city || "",
      dateRange: filters.dateRange || null,
      dateActive: Boolean(filters.dateRange),
      minPrice: 100,
      maxPrice: 900,
      sortBy: "Recomendados",
      currentPage: 1,
    })
    go("catalogo")
  }

  const handleViewPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg)
    go("detalle")
  }

  const handleConfirmReservation = (
    code: string,
    finalPayment: PaymentDetails
  ) => {
    const finalCode = code || generateBookingCode()
    setConfirmedBookingCode(finalCode)

    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0")
    const months = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ]
    const monthStr = months[now.getMonth()]
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, "0")
    const mins = String(now.getMinutes()).padStart(2, "0")
    const formattedDate = `${day} ${monthStr} ${year}, ${hours}:${mins}`

    const isTransfer = finalPayment.method === "transferencia"
    const methodLabel =
      finalPayment.method === "transferencia"
        ? "Transferencia bancaria"
        : finalPayment.method === "debito"
        ? "Tarjeta de débito"
        : "Tarjeta de crédito"

    const cleanCard = finalPayment.cardNumber?.replace(/\s/g, "") || ""
    const cardLast4 = cleanCard ? cleanCard.slice(-4) : undefined

    const newPurchase: PurchaseItem = {
      id: `purchase-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      code: finalCode,
      createdAt: formattedDate,
      status: isTransfer
        ? finalPayment.bankVoucherUploaded
          ? "Compra realizada"
          : "En verificación"
        : "Compra realizada",
      packages: cartItems.map((item) => ({
        id: item.pkg.id,
        name: item.pkg.name,
        region: item.pkg.region,
        city: item.pkg.city,
        province: item.pkg.province,
        date: item.date,
        people: item.people,
        price: item.pkg.price,
        total: item.total,
      })),
      total: cartTotal || 378,
      paymentMethod: finalPayment.method,
      paymentMethodLabel: methodLabel,
      installments: finalPayment.installments,
      voucherNumber: finalPayment.bankVoucherNumber,
      voucherUploaded: isTransfer
        ? Boolean(finalPayment.bankVoucherUploaded)
        : true,
      voucherFileName:
        isTransfer && finalPayment.bankVoucherUploaded
          ? "comprobante-transferencia.pdf"
          : undefined,
      cardLast4: cardLast4,
      titular: {
        name: personalInfo.fullName || currentUser?.name || "Titular de la reserva",
        email: personalInfo.email || currentUser?.email || "correo@ejemplo.com",
        phone: personalInfo.phone || "0991234567",
        cedula: personalInfo.cedula || "1712345675",
        address: personalInfo.mainStreet
          ? `${personalInfo.mainStreet} y ${personalInfo.secondaryStreet || ""}, ${personalInfo.city || ""} ${personalInfo.province || ""}`.trim()
          : "Quito, Pichincha",
      },
      travelers:
        travelersList.length > 0
          ? travelersList
          : [
              {
                id: "t-1",
                slotNumber: 1,
                packageTitle: cartItems[0]?.pkg.name || "Aventura en Baños",
                isTitular: true,
                fullName:
                  personalInfo.fullName ||
                  currentUser?.name ||
                  "Titular de la reserva",
                cedula: personalInfo.cedula || "1712345675",
                isMinor: false,
              },
            ],
    }

    // Save snapshot of current purchase for confirmation screen
    setLastPurchasedItems([...cartItems])
    setLastPurchasedTravelers([...newPurchase.travelers])
    setLastPurchasedPayment({ ...finalPayment })

    // Add to purchases and empty cart
    setPurchases((prev) => [newPurchase, ...prev])
    setCartItems([])
    clearStoredCheckoutSession()
    setActiveCheckoutStep("carrito")

    // Sincronizar automáticamente con Supabase (si está configurado en .env)
    saveReservationToSupabase({
      bookingCode: finalCode,
      total: cartTotal || 378,
      paymentData: finalPayment,
      cartItems,
      travelersList: newPurchase.travelers,
      personalInfo,
    }).catch((err) => {
      console.warn("Aviso: reserva guardada localmente; no se sincronizó con Supabase:", err)
    })

    if (currentUser) {
      const emailKey = currentUser.email.toLowerCase().trim()
      const currentAccounts = getStoredAccounts()
      const userAcc = currentAccounts[emailKey] || { cart: [], purchases: [] }
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          ...userAcc,
          cart: [],
          purchases: [newPurchase, ...(userAcc.purchases || [])],
        },
      }
      saveStoredAccounts(updatedAccounts)
    }

    // Requirement 2: Reset travelers and payment data so subsequent purchases start blank
    setTravelersList([])
    setPaymentData({
      method: "credito",
      cardNumber: "",
      cardHolder: "",
      cardExpiry: "",
      cardCvv: "",
      installments: "1 pago corriente (sin recargo)",
      bankVoucherNumber: "",
      bankVoucherUploaded: false,
    })
  }

  const handleAttachVoucher = (
    purchaseId: string,
    voucherNumber?: string,
    fileName?: string
  ) => {
    const genNumber =
      voucherNumber || `TR-${Math.floor(10000000 + Math.random() * 90000000)}`
    const genFile = fileName || "comprobante-transferencia.pdf"

    const updated = purchases.map((p) => {
      if (p.id === purchaseId || p.code === purchaseId) {
        return {
          ...p,
          status: "Compra realizada" as const,
          voucherNumber: genNumber,
          voucherUploaded: true,
          voucherFileName: genFile,
        }
      }
      return p
    })
    setPurchases(updated)

    setLastPurchasedPayment((prev) =>
      prev
        ? {
            ...prev,
            bankVoucherUploaded: true,
            bankVoucherNumber: genNumber,
          }
        : null
    )

    if (currentUser) {
      const emailKey = currentUser.email.toLowerCase().trim()
      const currentAccounts = getStoredAccounts()
      const userAcc = currentAccounts[emailKey] || { cart: [], purchases: [] }
      const updatedUserPurchases = (userAcc.purchases || []).map((p) => {
        if (p.id === purchaseId || p.code === purchaseId) {
          return {
            ...p,
            status: "Compra realizada" as const,
            voucherNumber: genNumber,
            voucherUploaded: true,
            voucherFileName: genFile,
          }
        }
        return p
      })
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          ...userAcc,
          purchases: updatedUserPurchases,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }

    // Sincronizar comprobante en la base de datos Supabase si la reserva existe en la nube
    const match = purchases.find((p) => p.id === purchaseId || p.code === purchaseId)
    if (match) {
      supabase
        .from("reservas")
        .update({
          comprobante_numero: genNumber,
          comprobante_subido_at: new Date().toISOString(),
          estado: "COMPRA_REALIZADA",
        })
        .or(`id.eq.${match.id},codigo_reserva.eq.${match.code}`)
        .then(
          () => {},
          (err: unknown) => console.warn("Aviso al actualizar comprobante en Supabase:", err)
        )
    }
  }

  const content = useMemo(() => {
    switch (page) {
      case "inicio":
        return (
          <Home
            go={go}
            onSearch={handleSearch}
            onViewPackage={handleViewPackage}
            packagesList={packagesList}
          />
        )
      case "catalogo":
        return (
          <Catalog
            go={go}
            filters={catalogFilters}
            onUpdateFilters={handleUpdateFilters}
            onResetFilters={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
            onViewPackage={handleViewPackage}
            packagesList={packagesList}
          />
        )
      case "catalogo-costa":
      case "catalogo-sierra":
      case "catalogo-amazonia":
      case "catalogo-galapagos": {
        const regionMap: Record<
          string,
          "Costa" | "Sierra" | "Amazonía" | "Galápagos"
        > = {
          "catalogo-costa": "Costa",
          "catalogo-sierra": "Sierra",
          "catalogo-amazonia": "Amazonía",
          "catalogo-galapagos": "Galápagos",
        }
        const regionName = regionMap[page] || ""
        return (
          <Catalog
            go={go}
            filters={{ ...catalogFilters, region: regionName }}
            onUpdateFilters={handleUpdateFilters}
            onResetFilters={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
            onViewPackage={handleViewPackage}
            packagesList={packagesList}
          />
        )
      }
      case "detalle":
        return (
          <Detail
            pkg={selectedPackage}
            go={go}
            onBack={() => go(previousPage || "catalogo")}
            addToCart={handleAddToCart}
            cartItems={cartItems}
            currentUser={currentUser}
            isFavorite={favorites.some((f) => f.packageId === selectedPackage.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )
      case "carrito":
        return (
          <Cart
            go={go}
            items={cartItems}
            onRemoveItem={handleRemoveCartItem}
            onUpdatePeople={handleUpdateCartItemPeople}
            onViewPackage={handleViewPackage}
            currentUser={currentUser}
            onLoginSuccess={handleLoginSuccess}
          />
        )
      case "identificacion":
        return (
          <Identification
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            onSavePersonalInfo={handleSavePersonalInfo}
          />
        )
      case "viajeros":
        return (
          <Travelers
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={cartItems}
            travelersList={travelersList}
            onSaveTravelers={setTravelersList}
          />
        )
      case "pago":
        return (
          <Payment
            go={go}
            total={cartTotal || 378}
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={cartItems}
            travelersList={travelersList}
            paymentData={paymentData}
            onSavePaymentData={setPaymentData}
            onConfirmReservation={handleConfirmReservation}
          />
        )
      case "confirmacion":
        return (
          <Confirmation
            go={go}
            total={
              lastPurchasedItems.reduce((acc, c) => acc + c.total, 0) ||
              cartTotal ||
              378
            }
            currentUser={currentUser}
            personalInfo={personalInfo}
            cartItems={
              lastPurchasedItems.length > 0 ? lastPurchasedItems : cartItems
            }
            travelersList={
              lastPurchasedTravelers.length > 0
                ? lastPurchasedTravelers
                : travelersList
            }
            paymentData={lastPurchasedPayment || paymentData}
            bookingCode={confirmedBookingCode}
            onAttachVoucher={(voucherNum, fileName) =>
              handleAttachVoucher(confirmedBookingCode, voucherNum, fileName)
            }
          />
        )
      case "reservas":
        return (
          <Reservations
            go={go}
            purchases={purchases}
            currentUser={currentUser}
            supportTickets={supportTickets}
            onAttachVoucher={handleAttachVoucher}
          />
        )
      case "politicas":
        return <Policies go={go} />
      case "soporte":
        return (
          <Support
            go={go}
            purchases={purchases}
            supportTickets={supportTickets}
            onTicketCreated={handleCreateTicket}
          />
        )
      case "tickets":
        return (
          <Tickets
            go={go}
            tickets={supportTickets}
            purchases={purchases}
          />
        )
      case "favoritos":
        return (
          <Favorites
            go={go}
            favorites={favorites}
            onRemoveFavorite={handleRemoveFavorite}
            onViewPackage={handleViewPackage}
            onAddToCart={handleAddToCartFromFavorites}
            currentUser={currentUser}
            onOpenLogin={() => setIsAuthModalOpen(true)}
          />
        )
      case "diagrama":
        return <StateDiagram />
    }
  }, [
    page,
    cartItems,
    cartTotal,
    purchases,
    lastPurchasedItems,
    lastPurchasedTravelers,
    lastPurchasedPayment,
    catalogFilters,
    selectedPackage,
    previousPage,
    currentUser,
    personalInfo,
    travelersList,
    paymentData,
    confirmedBookingCode,
    supportTickets,
    favorites,
  ])
  return (
    <div className="app">
      <Header
        page={page}
        cartCount={cartItems.length}
        favoritesCount={currentUser ? favorites.length : 0}
        currentPackageName={selectedPackage?.name}
        go={go}
        onGoToCart={handleGoToCart}
        onResetSearch={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />
      <main id="contenido" tabIndex={-1}>
        {content}
      </main>
      <Footer go={go} />
      <button className="floating-help" onClick={() => go("soporte")}>
        Ayuda
      </button>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentUser={currentUser}
        personalInfo={personalInfo}
        onSavePersonalInfo={handleSavePersonalInfo}
        onUpdateEmail={handleUpdateUserEmail}
        onUpdateName={handleUpdateUserName}
        purchasesCount={purchases.length}
        favoritesCount={favorites.length}
        ticketsCount={supportTickets.length}
        go={go}
      />
      {accountCreatedToast && (
        <div className="toast" role="status" style={{ zIndex: 120 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <PartyIcon size={16} color="var(--success)" />
            <span>{accountCreatedToast}</span>
          </span>
          <button onClick={() => setAccountCreatedToast(null)}>Cerrar</button>
        </div>
      )}
      {favoriteToast && (
        <div className="toast" role="status" style={{ zIndex: 120 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <HeartIcon
              size={16}
              filled={favoriteToast.isAdd}
              fillColor="var(--crimson)"
              color={favoriteToast.isAdd ? "var(--crimson)" : "#94a3b8"}
            />
            <span>{favoriteToast.text}</span>
          </span>
          <button onClick={() => setFavoriteToast(null)}>Cerrar</button>
        </div>
      )}
    </div>
  )
}
