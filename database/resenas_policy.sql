-- =============================================================================
-- POLITICAS DE RLS PARA PERMITIR REGISTRO Y ACTUALIZACION DE RESEÑAS
-- =============================================================================

ALTER TABLE resenas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Clientes crean sus resenas" ON resenas;
CREATE POLICY "Clientes crean sus resenas" ON resenas 
FOR INSERT 
WITH CHECK (true);

DROP POLICY IF EXISTS "Clientes actualizan sus resenas" ON resenas;
CREATE POLICY "Clientes actualizan sus resenas" ON resenas 
FOR UPDATE 
USING (true)
WITH CHECK (true);

