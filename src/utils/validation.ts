export function validateCedulaOrPassport(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
  if (!clean) {
    return {
      isValid: false,
      error: "El documento de identidad (cédula o pasaporte) es requerido.",
    }
  }

  // Comprobación de número mínimo y máximo de caracteres
  if (clean.length < 6) {
    return {
      isValid: false,
      error: `Faltan caracteres: el documento debe tener al menos 6 caracteres para pasaporte o 10 dígitos para cédula (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 12) {
    return {
      isValid: false,
      error: `Excede el límite: el documento debe tener máximo 10 dígitos para cédula o 12 caracteres para pasaporte (ingresaste ${clean.length}).`,
    }
  }

  // Validación de caracteres repetitivos o ficticios (ej. 1111111111, 0000000000, AAAAAAAA)
  if (/^([A-Z0-9])\1+$/.test(clean)) {
    return {
      isValid: false,
      error: "Documento no válido: no se permiten números o caracteres repetidos o ficticios (como 1111111111 o AAAAAA).",
    }
  }

  // Validación de secuencias consecutivas idénticas (6 o más iguales)
  if (/([A-Z0-9])\1{5}/.test(clean)) {
    return {
      isValid: false,
      error: "Documento no válido: no se admiten números o caracteres repetitivos ficticios.",
    }
  }

  // Secuencias numéricas triviales
  const trivialSeqs = [
    "1234567890",
    "0123456789",
    "9876543210",
    "12345678",
    "87654321",
    "0123456",
  ]
  if (trivialSeqs.includes(clean)) {
    return {
      isValid: false,
      error: "Documento no válido: no se permiten secuencias numéricas ficticias.",
    }
  }

  const isPureNumeric = /^\d+$/.test(clean)

  if (isPureNumeric) {
    // Si tiene exactamente 10 dígitos, debe cumplir con la validación de cédula ecuatoriana
    if (clean.length === 10) {
      const prov = parseInt(clean.substring(0, 2), 10)
      if ((prov < 1 || prov > 24) && prov !== 30) {
        return {
          isValid: false,
          error: "Código de provincia no válido: los dos primeros dígitos de la cédula deben estar entre 01 y 24 (o 30 para el exterior).",
        }
      }
      const third = parseInt(clean.charAt(2), 10)
      if (third >= 6) {
        return {
          isValid: false,
          error: "Tercer dígito no válido para cédula de persona natural (debe ser menor a 6).",
        }
      }
      const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2]
      let sum = 0
      for (let i = 0; i < 9; i++) {
        let p = parseInt(clean.charAt(i), 10) * coef[i]
        if (p >= 10) p -= 9
        sum += p
      }
      const verifier = (10 - (sum % 10)) % 10
      const lastDigit = parseInt(clean.charAt(9), 10)
      if (verifier !== lastDigit) {
        return {
          isValid: false,
          error: "Número de cédula inválido: el dígito verificador no coincide con una cédula ecuatoriana real.",
        }
      }
      return { isValid: true }
    }

    if (clean.length < 10) {
      return {
        isValid: false,
        error: `Faltan números: si ingresas una cédula ecuatoriana debe tener exactamente 10 dígitos (ingresaste ${clean.length}). Si es pasaporte, ingresa el código completo.`,
      }
    }

    if (clean.length > 10) {
      // Pasaporte numérico internacional de 11 o 12 dígitos
      return { isValid: true }
    }
  }

  // Pasaporte alfanumérico (con letras)
  return { isValid: true }
}

export const validateEcuadorianCedula = validateCedulaOrPassport

export function validatePhoneNumber(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "El número de celular es requerido." }
  }

  // Comprobación de número mínimo y máximo de caracteres
  if (clean.length < 10) {
    return {
      isValid: false,
      error: `Faltan números: el número de celular debe tener exactamente 10 dígitos (ingresaste ${clean.length}, ej. 0991234567).`,
    }
  }
  if (clean.length > 10) {
    return {
      isValid: false,
      error: `Excede el límite: el número de celular debe tener exactamente 10 dígitos (ingresaste ${clean.length}).`,
    }
  }

  // Comprobación de prefijo celular en Ecuador (debe empezar con 09)
  if (!clean.startsWith("09")) {
    return {
      isValid: false,
      error: "Número de celular no válido: debe iniciar con el prefijo 09 de telefonía móvil de Ecuador (ej. 0991234567).",
    }
  }

  // Validación: todos los 10 dígitos idénticos (ej. 0000000000, 9999999999)
  if (/^(\d)\1{9}$/.test(clean)) {
    return {
      isValid: false,
      error: "Número de celular no válido: no se admiten números ficticios o repetidos.",
    }
  }

  // Validación: prefijo 09 seguido de 8 dígitos idénticos (ej. 0999999999, 0900000000, 0911111111)
  if (/^09(\d)\1{7}$/.test(clean)) {
    return {
      isValid: false,
      error: "Número de celular no válido: no se permiten números ficticios o repetitivos (como 0999999999).",
    }
  }

  // Validación: 6 o más dígitos idénticos consecutivos (ej. 0980000001, 0999999912)
  if (/(\d)\1{5}/.test(clean)) {
    return {
      isValid: false,
      error: "Número de celular no válido: no se admiten números con secuencias de dígitos idénticos.",
    }
  }

  // Validación: secuencias triviales ficticias
  const trivialPhones = [
    "0987654321",
    "0912345678",
    "0989898989",
    "0909090909",
    "0901234567",
  ]
  if (trivialPhones.includes(clean)) {
    return {
      isValid: false,
      error: "Número de celular no válido: no se admiten secuencias numéricas ficticias.",
    }
  }

  return { isValid: true }
}

export function validateCardNumber(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "Ingresa el número de tu tarjeta." }
  }

  // Comprobación de número mínimo y máximo de caracteres (15 a 16 dígitos)
  if (clean.length < 15) {
    return {
      isValid: false,
      error: `Faltan números: la tarjeta debe tener entre 15 y 16 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 16) {
    return {
      isValid: false,
      error: `Excede el límite: la tarjeta debe tener máximo 16 dígitos (ingresaste ${clean.length}).`,
    }
  }

  // Validación: todos los dígitos idénticos (ej. 1111111111111111, 0000000000000000, 9999999999999999)
  if (/^(\d)\1{14,15}$/.test(clean)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: no se admiten números ficticios o repetidos (como 1111 1111 1111 1111).",
    }
  }

  // Validación: 7 o más dígitos consecutivos idénticos (ej. 4111111111111111)
  if (/(\d)\1{6}/.test(clean)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: no se admiten números con secuencias de dígitos repetidos.",
    }
  }

  // Validación: secuencias triviales ficticias
  const trivialCards = [
    "1234567890123456",
    "9876543210987654",
    "1234123412341234",
  ]
  if (trivialCards.includes(clean)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: no se admiten secuencias numéricas ficticias.",
    }
  }

  // Validación del emisor o franquicia (Visa: 4, Mastercard: 5 o 2, Amex: 3, Diners: 3, Discover: 6)
  const firstDigit = clean.charAt(0)
  if (!["2", "3", "4", "5", "6"].includes(firstDigit)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: el emisor o franquicia no es reconocido (debe ser Visa, Mastercard, American Express, Diners o Discover).",
    }
  }

  // Algoritmo de Luhn (módulo 10) para comprobar si es una tarjeta real
  let sum = 0
  let shouldDouble = false
  for (let i = clean.length - 1; i >= 0; i--) {
    let digit = parseInt(clean.charAt(i), 10)
    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
    shouldDouble = !shouldDouble
  }
  if (sum % 10 !== 0) {
    return {
      isValid: false,
      error: "Número de tarjeta no válido: el algoritmo de verificación indica que no es una tarjeta bancaria real.",
    }
  }

  return { isValid: true }
}

export function validateCardExpiry(value: string): {
  isValid: boolean
  error?: string
} {
  const trimmed = value.trim()
  if (!trimmed) {
    return { isValid: false, error: "Ingresa la fecha de vencimiento (MM/AA)." }
  }
  const parts = trimmed.split("/")
  if (parts.length !== 2) {
    return {
      isValid: false,
      error: "Formato inválido: la fecha debe ingresarse como MM/AA (ej. 12/28).",
    }
  }
  const monthStr = parts[0].trim()
  const yearStr = parts[1].trim()
  if (monthStr.length < 2 || yearStr.length < 2) {
    return {
      isValid: false,
      error: "Faltan números: debes ingresar 2 dígitos de mes y 2 de año (MM/AA).",
    }
  }
  if (monthStr.length > 2 || yearStr.length > 2) {
    return {
      isValid: false,
      error: "Están de más números: la fecha debe ser de 2 dígitos de mes y 2 de año (MM/AA).",
    }
  }
  const month = parseInt(monthStr, 10)
  const year = parseInt(yearStr, 10)
  if (isNaN(month) || isNaN(year)) {
    return { isValid: false, error: "La fecha debe contener únicamente números." }
  }
  if (month < 1 || month > 12) {
    return {
      isValid: false,
      error: `Mes inválido (${monthStr}): no se pueden ingresar meses inventados (debe estar entre 01 y 12).`,
    }
  }
  const curYearShort = 26
  const curMonth = 10
  if (year < curYearShort || (year === curYearShort && month < curMonth)) {
    return { isValid: false, error: "Tarjeta vencida: la fecha de vencimiento ya expiró." }
  }
  if (year > curYearShort + 20) {
    return { isValid: false, error: "Año de vencimiento demasiado lejano o incorrecto." }
  }
  return { isValid: true }
}

export function validateCardCvv(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "El código de seguridad (CVV) es requerido." }
  }
  if (clean.length < 3) {
    return {
      isValid: false,
      error: `Faltan números: el código de seguridad (CVV) debe tener exactamente 3 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 3) {
    return {
      isValid: false,
      error: `Están de más números: el código de seguridad debe tener exactamente 3 dígitos (ingresaste ${clean.length}).`,
    }
  }
  return { isValid: true }
}

