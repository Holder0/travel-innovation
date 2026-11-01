-- =============================================================================
-- PROYECTO ACADÉMICO: TRAVEL INNOVATION (SUPABASE AUTH / GOTRUE FIX)
-- SCRIPT: HABILITAR INICIO DE SESIÓN PARA LOS 10 USUARIOS DE PRUEBA
-- CONTRASEÑA COMÚN: Temporal2026!
-- =============================================================================

-- 1. Asegurar que los 10 usuarios en auth.users tengan correo confirmado y proveedor email
UPDATE auth.users
SET email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
    confirmed_at = COALESCE(confirmed_at, NOW()),
    last_sign_in_at = NOW(),
    raw_app_meta_data = '{"provider":"email","providers":["email"]}'::jsonb,
    is_sso_user = false
WHERE email IN (
    'carlos.mendoza@travelinnovation.ec',
    'maria.salazar@travelinnovation.ec',
    'admin@travelinnovation.ec',
    'juan.perez@email.com',
    'ana.torres@email.com',
    'diego.morales@email.com',
    'valeria.castro@email.com',
    'fernando.alvarez@email.com',
    'gabriela.reyes@email.com',
    'rodrigo.paredes@email.com'
);

-- 2. Limpiar identidades previas para evitar conflictos de clave única
DELETE FROM auth.identities
WHERE user_id IN (
    SELECT id FROM auth.users 
    WHERE email IN (
        'carlos.mendoza@travelinnovation.ec',
        'maria.salazar@travelinnovation.ec',
        'admin@travelinnovation.ec',
        'juan.perez@email.com',
        'ana.torres@email.com',
        'diego.morales@email.com',
        'valeria.castro@email.com',
        'fernando.alvarez@email.com',
        'gabriela.reyes@email.com',
        'rodrigo.paredes@email.com'
    )
);

-- 3. Insertar registros en auth.identities requeridos por GoTrue para autenticación por contraseña
INSERT INTO auth.identities (
    id,
    provider_id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
)
SELECT 
    gen_random_uuid(),
    id::text,
    id,
    jsonb_build_object('sub', id::text, 'email', email),
    'email',
    NOW(),
    NOW(),
    NOW()
FROM auth.users
WHERE email IN (
    'carlos.mendoza@travelinnovation.ec',
    'maria.salazar@travelinnovation.ec',
    'admin@travelinnovation.ec',
    'juan.perez@email.com',
    'ana.torres@email.com',
    'diego.morales@email.com',
    'valeria.castro@email.com',
    'fernando.alvarez@email.com',
    'gabriela.reyes@email.com',
    'rodrigo.paredes@email.com'
);

