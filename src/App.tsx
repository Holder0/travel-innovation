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
} from "./types"
import { DEFAULT_CATALOG_FILTERS } from "./types"
import { packages } from "./data/packagesData"
import {
  generateBookingCode,
  getRegisteredUsers,
  getStoredAccounts,
  saveStoredAccounts,
} from "./services/storage"

import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { AuthModal } from "./components/modals/AuthModal"
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

export default function App() {
  const [page, setPage] = useState<Page>("inicio")
  const [previousPage, setPreviousPage] = useState<Page>("catalogo")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
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
  const [selectedPackage, setSelectedPackage] = useState<PackageItem>(
    packages[4],
  )
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<{
    name: string
    email: string
  } | null>(null)
  const [accountCreatedToast, setAccountCreatedToast] = useState<string | null>(null)

  useEffect(() => {
    if (accountCreatedToast) {
      const timer = setTimeout(() => setAccountCreatedToast(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [accountCreatedToast])

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    email: "",
    phone: "",
    cedula: "",
    province: "",
    city: "",
    mainStreet: "",
    secondaryStreet: "",
    reference: "",
  })

  const [travelersList, setTravelersList] = useState<TravelerData[]>([])

  const [paymentData, setPaymentData] = useState<PaymentDetails>({
    method: "credito",
    cardNumber: "",
    cardHolder: "",
    cardExpiry: "",
    cardCvv: "",
    installments: "1 pago corriente (sin recargo)",
    bankVoucherNumber: "",
    bankVoucherUploaded: false,
  })

  const [confirmedBookingCode, setConfirmedBookingCode] = useState(() =>
    generateBookingCode()
  )

  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([])

  const handleCreateTicket = (ticket: SupportTicket) => {
    setSupportTickets((prev) => [ticket, ...prev])
  }

  // Sync personal info when user changes
  useEffect(() => {
    if (currentUser) {
      setPersonalInfo((prev) => ({
        ...prev,
        fullName: prev.fullName || currentUser.name,
        email: prev.email || currentUser.email,
      }))
    }
  }, [currentUser])

  // Sync active user cart, purchases, and personal info to localStorage whenever they change
  useEffect(() => {
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: cartItems,
          purchases: purchases,
          savedPersonalInfo: personalInfo,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }
  }, [cartItems, purchases, currentUser, personalInfo])

  const handleSavePersonalInfo = (info: PersonalInfo) => {
    setPersonalInfo(info)
    if (currentUser) {
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
    }
  }

  const handleLoginSuccess = (user: { name: string; email: string }) => {
    const currentAccounts = getStoredAccounts()
    const emailKey = user.email.trim().toLowerCase()
    const existing = currentAccounts[emailKey]

    const regUsers = getRegisteredUsers()
    const regRecord = regUsers[emailKey]
    const regFullName = regRecord ? regRecord.fullName : user.name

    if (existing) {
      // Account exists: restore that account's cart, purchases, and personal info
      let mergedCart = [...(existing.cart || [])]
      if (cartItems.length > 0) {
        const existingPkgIds = new Set(mergedCart.map((c) => c.pkg.id))
        const newGuestItems = cartItems.filter(
          (c) => !existingPkgIds.has(c.pkg.id)
        )
        mergedCart = [...mergedCart, ...newGuestItems]
      }
      setCartItems(mergedCart)
      setPurchases(existing.purchases || [])

      if (existing.savedPersonalInfo) {
        setPersonalInfo({
          ...existing.savedPersonalInfo,
          fullName: regFullName,
          email: user.email,
        })
      } else {
        setPersonalInfo({
          fullName: regFullName,
          email: user.email,
          phone: "",
          cedula: "",
          province: "",
          city: "",
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
        },
      }
      saveStoredAccounts(updatedAccounts)
    } else {
      // Brand new account created: assign own isolated cart, empty purchases, empty personal info
      const initialCart = [...cartItems]
      const newAccountData: UserAccountData = {
        cart: initialCart,
        purchases: [],
        savedPersonalInfo: undefined,
      }
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: newAccountData,
      }
      saveStoredAccounts(updatedAccounts)
      setCartItems(initialCart)
      setPurchases([])
      setPersonalInfo({
        fullName: regFullName,
        email: user.email,
        phone: "",
        cedula: "",
        province: "",
        city: "",
        mainStreet: "",
        secondaryStreet: "",
        reference: "",
      })
      setAccountCreatedToast(
        `🎉 ¡Cuenta creada con éxito! Bienvenido a Travel Innovation, ${regFullName.split(" ")[0] || "viajero"}.`
      )
    }

    setCurrentUser({ name: regFullName, email: user.email })
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    // When logging out: persist current account cart, purchases, and personal info
    if (currentUser) {
      const emailKey = currentUser.email.trim().toLowerCase()
      const currentAccounts = getStoredAccounts()
      const updatedAccounts = {
        ...currentAccounts,
        [emailKey]: {
          cart: cartItems,
          purchases: purchases,
          savedPersonalInfo: personalInfo,
        },
      }
      saveStoredAccounts(updatedAccounts)
    }

    // Reset session states for fresh guest or next user
    setCurrentUser(null)
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
    setCartItems((prev) => [...prev, newItem])

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
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setTravelersList([])
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

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.total, 0)
  }, [cartItems])

  const go = (next: Page) => {
    if (next === "detalle") {
      setPreviousPage(page)
    }
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSearch = (filters: SearchFilters) => {
    setCatalogFilters({
      region: filters.region || "",
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
    const updated = purchases.map((p) => {
      if (p.id === purchaseId) {
        return {
          ...p,
          status: "Compra realizada" as const,
          voucherNumber:
            voucherNumber ||
            p.voucherNumber ||
            `TR-${Math.floor(10000000 + Math.random() * 90000000)}`,
          voucherUploaded: true,
          voucherFileName: fileName || "comprobante-transferencia.pdf",
        }
      }
      return p
    })
    setPurchases(updated)

    if (currentUser) {
      const emailKey = currentUser.email.toLowerCase().trim()
      const currentAccounts = getStoredAccounts()
      const userAcc = currentAccounts[emailKey] || { cart: [], purchases: [] }
      const updatedUserPurchases = (userAcc.purchases || []).map((p) => {
        if (p.id === purchaseId) {
          return {
            ...p,
            status: "Compra realizada" as const,
            voucherNumber:
              voucherNumber ||
              p.voucherNumber ||
              `TR-${Math.floor(10000000 + Math.random() * 90000000)}`,
            voucherUploaded: true,
            voucherFileName: fileName || "comprobante-transferencia.pdf",
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
  }

  const content = useMemo(() => {
    switch (page) {
      case "inicio":
        return (
          <Home
            go={go}
            onSearch={handleSearch}
            onViewPackage={handleViewPackage}
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
  ])
  return (
    <div className="app">
      <Header
        page={page}
        cartCount={cartItems.length}
        currentPackageName={selectedPackage?.name}
        go={go}
        onResetSearch={() => setCatalogFilters(DEFAULT_CATALOG_FILTERS)}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
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
      {accountCreatedToast && (
        <div className="toast" role="status" style={{ zIndex: 120 }}>
          <span>{accountCreatedToast}</span>
          <button onClick={() => setAccountCreatedToast(null)}>Cerrar</button>
        </div>
      )}
    </div>
  )
}
