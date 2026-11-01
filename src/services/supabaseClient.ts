import { createClient, SupabaseClient } from "@supabase/supabase-js"

const rawUrl: string = (import.meta.env.VITE_SUPABASE_URL || "").trim()
const rawKey: string = (import.meta.env.VITE_SUPABASE_ANON_KEY || "").trim()

/**
 * Verifica si las variables de entorno de Supabase fueron configuradas con valores reales.
 */
export function isSupabaseConfigured(): boolean {
  return (
    Boolean(rawUrl) &&
    Boolean(rawKey) &&
    rawUrl.startsWith("https://") &&
    !rawUrl.includes("tu-proyecto-id") &&
    !rawKey.includes("tu-anon-key")
  )
}

// Valores de respaldo para evitar excepciones al compilar si aún no se han configurado las claves
const safeUrl = isSupabaseConfigured() ? rawUrl : "https://placeholder-project.supabase.co"
const safeKey = isSupabaseConfigured() ? rawKey : "placeholder-anon-key"

export const supabase: SupabaseClient = createClient(safeUrl, safeKey)

