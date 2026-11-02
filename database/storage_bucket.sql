-- =============================================================================
-- CREACIÓN DEL BUCKET DE ALMACENAMIENTO PARA COMPROBANTES Y POLÍTICAS PÚBLICAS
-- =============================================================================

-- 1. Crear el bucket 'comprobantes' como público
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'comprobantes',
  'comprobantes',
  true,
  10485760, -- 10 MB límite
  ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Políticas de acceso (RLS) para permitir lectura y subida de comprobantes
DROP POLICY IF EXISTS "Permitir lectura publica de comprobantes" ON storage.objects;
CREATE POLICY "Permitir lectura publica de comprobantes"
ON storage.objects FOR SELECT
USING (bucket_id = 'comprobantes');

DROP POLICY IF EXISTS "Permitir subida publica de comprobantes" ON storage.objects;
CREATE POLICY "Permitir subida publica de comprobantes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'comprobantes');

DROP POLICY IF EXISTS "Permitir actualizacion publica de comprobantes" ON storage.objects;
CREATE POLICY "Permitir actualizacion publica de comprobantes"
ON storage.objects FOR UPDATE
USING (bucket_id = 'comprobantes');

