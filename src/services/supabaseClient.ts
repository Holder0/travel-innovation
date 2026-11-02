import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Claves de producción para despliegues públicos en GitHub Pages / CI sin .env
const DEFAULT_SUPABASE_URL = "https://gytkzlkaagzfuptdnjkl.supabase.co"
const DEFAULT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5dGt6bGthYWd6ZnVwdGRuamtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NDI0ODMsImV4cCI6MjEwOTExODQ4M30.1yzoaADGdlPsgZhyVaHWFBtnViUxvFSookMjiHlS8Zc"

const rawUrl: string = (import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL).trim()
const rawKey: string = (import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY).trim()

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
const safeUrl = isSupabaseConfigured() ? rawUrl : DEFAULT_SUPABASE_URL
const safeKey = isSupabaseConfigured() ? rawKey : DEFAULT_SUPABASE_ANON_KEY

export const supabase: SupabaseClient = createClient(safeUrl, safeKey)

