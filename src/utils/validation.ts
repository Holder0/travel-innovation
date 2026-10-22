export function validateEcuadorianCedula(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "La cédula de identidad es requerida." }
  }
  if (clean.length < 10) {
    return {
      isValid: false,
      error: `Faltan números: la cédula debe tener exactamente 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 10) {
    return {
      isValid: false,
      error: `Están de más números: la cédula debe tener exactamente 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (/^(\d)\1{9}$/.test(clean)) {
    return {
      isValid: false,
      error: "Cédula inválida: no se permiten números repetidos o ficticios.",
    }
  }
  const prov = parseInt(clean.substring(0, 2), 10)
  if ((prov < 1 || prov > 24) && prov !== 30) {
    return {
      isValid: false,
      error: "Código de provincia no válido: los dos primeros dígitos deben estar entre 01 y 24.",
    }
  }
  const third = parseInt(clean.charAt(2), 10)
  if (third >= 6) {
    return {
      isValid: false,
      error: "Tercer dígito no válido para cédula de persona natural.",
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

export function validatePhoneNumber(value: string): {
  isValid: boolean
  error?: string
} {
  const clean = value.replace(/\D/g, "")
  if (!clean) {
    return { isValid: false, error: "El número de teléfono es requerido." }
  }
  if (clean.length < 10) {
    return {
      isValid: false,
      error: `Faltan números: el número de teléfono debe tener exactamente 10 dígitos (ingresaste ${clean.length}, ej. 0991234567).`,
    }
  }
  if (clean.length > 10) {
    return {
      isValid: false,
      error: `Están de más números: el número de teléfono debe tener máximo 10 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (!clean.startsWith("0")) {
    return {
      isValid: false,
      error: "Número de teléfono inválido: debe iniciar con 0 (ej. 09...).",
    }
  }
  if (/^(\d)\1{9}$/.test(clean)) {
    return {
      isValid: false,
      error: "Número de teléfono inválido: no se admiten números repetidos o ficticios.",
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
  if (clean.length < 16) {
    return {
      isValid: false,
      error: `Faltan números: la tarjeta debe tener exactamente 16 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (clean.length > 16) {
    return {
      isValid: false,
      error: `Están de más números: la tarjeta debe tener exactamente 16 dígitos (ingresaste ${clean.length}).`,
    }
  }
  if (/^(\d)\1{15}$/.test(clean)) {
    return {
      isValid: false,
      error: "Tarjeta no válida: no se admiten números ficticios o repetidos (ej. 16 unos seguidos).",
    }
  }
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
      error: "Número de tarjeta no válido: el algoritmo de verificación indica que no es una tarjeta real.",
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

