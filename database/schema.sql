-- =============================================================================
-- PROYECTO ACADÉMICO: E-COMMERCE AGENCIA DE VIAJES (TRAVEL INNOVATION)
-- SCRIPT DDL: CREACIÓN DE ESTRUCTURA RELACIONAL EN POSTGRESQL / SUPABASE (3FN)
-- MÓDULO EXCLUSIVO: PLATAFORMA PÚBLICA / WEB E-COMMERCE
-- =============================================================================

-- 1. Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Limpieza preventiva en orden inverso de dependencias (para ejecuciones limpias)
DROP TABLE IF EXISTS resenas CASCADE;
DROP TABLE IF EXISTS viajeros CASCADE;
DROP TABLE IF EXISTS reserva_detalles CASCADE;
DROP TABLE IF EXISTS reservas CASCADE;
DROP TABLE IF EXISTS paquete_fechas CASCADE;
DROP TABLE IF EXISTS itinerarios CASCADE;
DROP TABLE IF EXISTS paquetes CASCADE;
DROP TABLE IF EXISTS destinos CASCADE;
DROP TABLE IF EXISTS categorias CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS roles CASCADE;

-- =============================================================================
-- TABLA 1: ROLES (Control de Acceso Basado en Roles - RBAC)
-- =============================================================================
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    descripcion TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE roles IS 'Catálogo de perfiles y roles de acceso para usuarios de la plataforma.';

-- =============================================================================
-- TABLA 2: USUARIOS (Perfiles de Clientes y Agentes enlazados a Supabase Auth)
-- RESTRICCIÓN: Cédula NO es PK (se usa UUID subrogado enlazado a auth.users).
-- =============================================================================
CREATE TABLE usuarios (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    rol_id INT NOT NULL DEFAULT 1 REFERENCES roles(id) ON DELETE RESTRICT,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefono VARCHAR(25),
    tipo_documento VARCHAR(20) NOT NULL DEFAULT 'CEDULA' 
        CHECK (tipo_documento IN ('CEDULA', 'PASAPORTE')),
    numero_identificacion VARCHAR(30) UNIQUE, -- Cédula/Pasaporte como dato único de negocio, NO PK
    provincia VARCHAR(100),
    ciudad VARCHAR(100),
    direccion TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE usuarios IS 'Datos de perfil público de clientes y agentes. Clave subrogada UUID vinculada a auth.users.';

-- =============================================================================
-- TABLA 3: CATEGORIAS (Clasificación Temática de Tipos de Viaje)
-- =============================================================================
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    icono VARCHAR(50), -- Nombre de icono o emoji (ej. compass, mountain, umbrella, heart)
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE categorias IS 'Tipos o estilos de viaje (Aventura, Ecoturismo, Relax, Luna de Miel, etc.).';

-- =============================================================================
-- TABLA 4: DESTINOS (Normalización Geográfica en 3FN: Región, Provincia, Ciudad)
-- =============================================================================
CREATE TABLE destinos (
    id SERIAL PRIMARY KEY,
    region VARCHAR(50) NOT NULL 
        CHECK (region IN ('Costa', 'Sierra', 'Amazonía', 'Galápagos')),
    provincia VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    descripcion TEXT,
    clima_sugerido VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_destinos_provincia_ciudad UNIQUE (provincia, ciudad)
);

COMMENT ON TABLE destinos IS 'Destinos geográficos normalizados para evitar redundancias en paquetes (3FN).';

-- =============================================================================
-- TABLA 5: PAQUETES (Catálogo de Paquetes Turísticos Comercializables)
-- =============================================================================
CREATE TABLE paquetes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    destino_id INT NOT NULL REFERENCES destinos(id) ON DELETE RESTRICT,
    categoria_id INT NOT NULL REFERENCES categorias(id) ON DELETE RESTRICT,
    nombre VARCHAR(200) NOT NULL UNIQUE,
    slug VARCHAR(200) NOT NULL UNIQUE,
    duracion_dias INT NOT NULL CHECK (duracion_dias > 0),
    duracion_noches INT NOT NULL CHECK (duracion_noches >= 0),
    precio_base NUMERIC(10, 2) NOT NULL CHECK (precio_base > 0),
    imagen_principal TEXT NOT NULL,
    imagenes_secundarias TEXT[] DEFAULT '{}',
    destacado BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE paquetes IS 'Ficha principal de cada paquete turístico ofertado en la tienda web.';

-- =============================================================================
-- TABLA 6: ITINERARIOS (Cronograma Día a Día del Paquete Turístico)
-- =============================================================================
CREATE TABLE itinerarios (
    id SERIAL PRIMARY KEY,
    paquete_id UUID NOT NULL REFERENCES paquetes(id) ON DELETE CASCADE,
    dia_numero INT NOT NULL CHECK (dia_numero > 0),
    titulo_actividad VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    incluye_desayuno BOOLEAN NOT NULL DEFAULT FALSE,
    incluye_almuerzo BOOLEAN NOT NULL DEFAULT FALSE,
    incluye_cena BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_itinerario_paquete_dia UNIQUE (paquete_id, dia_numero)
);

COMMENT ON TABLE itinerarios IS 'Desglose atómico de actividades día por día para cada paquete (1FN y 3FN).';

-- =============================================================================
-- TABLA 7: PAQUETE_FECHAS (Salidas Programadas y Control de Cupos)
-- =============================================================================
CREATE TABLE paquete_fechas (
    id SERIAL PRIMARY KEY,
    paquete_id UUID NOT NULL REFERENCES paquetes(id) ON DELETE CASCADE,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    cupos_totales INT NOT NULL CHECK (cupos_totales > 0),
    cupos_disponibles INT NOT NULL CHECK (cupos_disponibles >= 0 AND cupos_disponibles <= cupos_totales),
    precio_salida NUMERIC(10, 2), -- Precio específico para temporada especial (opcional)
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT ck_fechas_coherentes CHECK (fecha_fin >= fecha_inicio),
    CONSTRAINT uq_paquete_rango_fechas UNIQUE (paquete_id, fecha_inicio, fecha_fin)
);

COMMENT ON TABLE paquete_fechas IS 'Calendario de salidas reales con cupos disponibles para cada paquete.';

-- =============================================================================
-- TABLA 8: RESERVAS (Cabecera de la Orden de Pedido / Booking)
-- =============================================================================
CREATE TABLE reservas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_reserva VARCHAR(30) NOT NULL UNIQUE, -- Formato TI-2026-XXXX
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE RESTRICT,
    monto_subtotal NUMERIC(10, 2) NOT NULL CHECK (monto_subtotal >= 0),
    monto_descuento NUMERIC(10, 2) NOT NULL DEFAULT 0.00 CHECK (monto_descuento >= 0),
    monto_total NUMERIC(10, 2) NOT NULL CHECK (monto_total >= 0),
    estado VARCHAR(30) NOT NULL DEFAULT 'EN_VERIFICACION'
        CHECK (estado IN ('PENDIENTE', 'EN_VERIFICACION', 'COMPRA_REALIZADA', 'CONFIRMADA', 'REPROGRAMADA', 'CANCELADA')),
    metodo_pago VARCHAR(30) NOT NULL 
        CHECK (metodo_pago IN ('transferencia', 'debito', 'credito')),
    cuotas_info VARCHAR(100), -- Detalle de diferido en tarjetas de crédito (ej. '6 cuotas sin intereses')
    comprobante_numero VARCHAR(50), -- Código de transacción bancaria
    comprobante_url TEXT, -- URL en Supabase Storage del archivo subido
    comprobante_subido_at TIMESTAMPTZ,
    fecha_limite_pago TIMESTAMPTZ NOT NULL, -- Garantía de 24 horas para transferencias bancarias
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE reservas IS 'Cabecera de la orden de pedido turística generada en el checkout de la web.';

-- =============================================================================
-- TABLA 9: RESERVA_DETALLES (Detalle de Ítems de la Orden de Pedido)
-- =============================================================================
CREATE TABLE reserva_detalles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reserva_id UUID NOT NULL REFERENCES reservas(id) ON DELETE CASCADE,
    paquete_id UUID NOT NULL REFERENCES paquetes(id) ON DELETE RESTRICT,
    paquete_fecha_id INT REFERENCES paquete_fechas(id) ON DELETE RESTRICT,
    cantidad_personas INT NOT NULL CHECK (cantidad_personas > 0),
    precio_unitario_congelado NUMERIC(10, 2) NOT NULL CHECK (precio_unitario_congelado > 0),
    -- Subtotal calculado mediante columna generada persistida (Regla estricta 3FN sin redundancia mutable)
    subtotal NUMERIC(10, 2) GENERATED ALWAYS AS (cantidad_personas * precio_unitario_congelado) STORED,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE reserva_detalles IS 'Líneas contratadas en cada reserva con precio congelado inmutable (auditoría).';

-- =============================================================================
-- TABLA 10: VIAJEROS (Pasajeros Individuales Asignados a cada Cupo Contratado)
-- =============================================================================
CREATE TABLE viajeros (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reserva_detalle_id UUID NOT NULL REFERENCES reserva_detalles(id) ON DELETE CASCADE,
    numero_slot INT NOT NULL CHECK (numero_slot > 0),
    nombres_completos VARCHAR(150) NOT NULL,
    tipo_documento VARCHAR(20) NOT NULL DEFAULT 'CEDULA'
        CHECK (tipo_documento IN ('CEDULA', 'PASAPORTE')),
    numero_documento VARCHAR(30) NOT NULL, -- Documento de identidad del pasajero (NO PK)
    fecha_nacimiento DATE,
    telefono VARCHAR(25),
    email VARCHAR(150),
    es_titular BOOLEAN NOT NULL DEFAULT FALSE,
    es_menor BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE viajeros IS 'Registro obligatorio de datos de cada pasajero que viajará en los cupos reservados.';

-- =============================================================================
-- TABLA 11: RESENAS (Opiniones y Calificaciones de Paquetes Turísticos)
-- =============================================================================
CREATE TABLE resenas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    paquete_id UUID NOT NULL REFERENCES paquetes(id) ON DELETE CASCADE,
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    calificacion INT NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
    titulo VARCHAR(150),
    comentario TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_usuario_paquete_resena UNIQUE (paquete_id, usuario_id)
);

COMMENT ON TABLE resenas IS 'Valoraciones comunitarias de clientes para los paquetes que han visitado.';

-- =============================================================================
-- ÍNDICES DE RENDIMIENTO PARA CONSULTAS FRECUENTES DEL E-COMMERCE
-- =============================================================================
CREATE INDEX idx_paquetes_destino ON paquetes(destino_id);
CREATE INDEX idx_paquetes_categoria ON paquetes(categoria_id);
CREATE INDEX idx_paquetes_activo ON paquetes(is_active);
CREATE INDEX idx_itinerarios_paquete ON itinerarios(paquete_id);
CREATE INDEX idx_paquete_fechas_paquete ON paquete_fechas(paquete_id);
CREATE INDEX idx_reservas_usuario ON reservas(usuario_id);
CREATE INDEX idx_reservas_codigo ON reservas(codigo_reserva);
CREATE INDEX idx_reservas_estado ON reservas(estado);
CREATE INDEX idx_reserva_detalles_reserva ON reserva_detalles(reserva_id);
CREATE INDEX idx_viajeros_detalle ON viajeros(reserva_detalle_id);
CREATE INDEX idx_resenas_paquete ON resenas(paquete_id);

-- =============================================================================
-- FUNCIONES Y TRIGGERS DE AUTOMATIZACIÓN EN POSTGRESQL
-- =============================================================================

-- 1. Función para actualizar automáticamente el campo updated_at
CREATE OR REPLACE FUNCTION fn_actualizar_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_paquetes_updated_at
BEFORE UPDATE ON paquetes
FOR EACH ROW EXECUTE FUNCTION fn_actualizar_updated_at();

CREATE TRIGGER tr_usuarios_updated_at
BEFORE UPDATE ON usuarios
FOR EACH ROW EXECUTE FUNCTION fn_actualizar_updated_at();

CREATE TRIGGER tr_reservas_updated_at
BEFORE UPDATE ON reservas
FOR EACH ROW EXECUTE FUNCTION fn_actualizar_updated_at();

-- 2. Trigger para sincronizar automáticamente usuarios de Supabase Auth a public.usuarios
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.usuarios (
        id,
        rol_id,
        nombres,
        apellidos,
        email,
        telefono,
        tipo_documento,
        numero_identificacion,
        provincia,
        ciudad,
        direccion
    ) VALUES (
        NEW.id,
        1, -- Rol 1: CLIENTE por defecto
        COALESCE(NEW.raw_user_meta_data->>'first_name', 'Usuario'),
        COALESCE(NEW.raw_user_meta_data->>'last_name', 'Registrado'),
        NEW.email,
        NEW.raw_user_meta_data->>'phone',
        'CEDULA',
        NEW.raw_user_meta_data->>'cedula',
        NEW.raw_user_meta_data->>'province',
        NEW.raw_user_meta_data->>'city',
        NEW.raw_user_meta_data->>'address'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enlazar trigger a auth.users (se activa al registrarse un nuevo usuario en Supabase)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================================================
-- POLÍTICAS BÁSICAS DE ROW LEVEL SECURITY (RLS)
-- =============================================================================
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinos ENABLE ROW LEVEL SECURITY;
ALTER TABLE paquetes ENABLE ROW LEVEL SECURITY;
ALTER TABLE itinerarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE paquete_fechas ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservas ENABLE ROW LEVEL SECURITY;
ALTER TABLE reserva_detalles ENABLE ROW LEVEL SECURITY;
ALTER TABLE viajeros ENABLE ROW LEVEL SECURITY;
ALTER TABLE resenas ENABLE ROW LEVEL SECURITY;

-- Catálogo de lectura pública para todos los visitantes (anon y authenticated)
CREATE POLICY "Catalogo publico categorias" ON categorias FOR SELECT USING (true);
CREATE POLICY "Catalogo publico destinos" ON destinos FOR SELECT USING (true);
CREATE POLICY "Catalogo publico paquetes" ON paquetes FOR SELECT USING (is_active = true);
CREATE POLICY "Catalogo publico itinerarios" ON itinerarios FOR SELECT USING (true);
CREATE POLICY "Catalogo publico fechas" ON paquete_fechas FOR SELECT USING (is_active = true);
CREATE POLICY "Catalogo publico resenas" ON resenas FOR SELECT USING (true);

-- Perfiles de usuario: cada cliente solo ve y edita su propio perfil
CREATE POLICY "Usuarios ven su propio perfil" ON usuarios 
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Usuarios editan su propio perfil" ON usuarios 
FOR UPDATE USING (auth.uid() = id);

-- Reservas: cada cliente solo ve y crea sus propias reservas
CREATE POLICY "Clientes ven sus reservas" ON reservas 
FOR SELECT USING (auth.uid() = usuario_id);

CREATE POLICY "Clientes crean sus reservas" ON reservas 
FOR INSERT WITH CHECK (auth.uid() = usuario_id);

CREATE POLICY "Clientes ven detalles de sus reservas" ON reserva_detalles 
FOR SELECT USING (
    EXISTS (SELECT 1 FROM reservas WHERE reservas.id = reserva_detalles.reserva_id AND reservas.usuario_id = auth.uid())
);

CREATE POLICY "Clientes ven sus viajeros" ON viajeros 
FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM reserva_detalles 
        JOIN reservas ON reservas.id = reserva_detalles.reserva_id 
        WHERE reserva_detalles.id = viajeros.reserva_detalle_id AND reservas.usuario_id = auth.uid()
    )
);

