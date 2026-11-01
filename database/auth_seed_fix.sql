-- =============================================================================
-- PROYECTO ACADÉMICO: TRAVEL INNOVATION (SUPABASE AUTH / GOTRUE FIX)
-- SCRIPT: HABILITAR INICIO DE SESIÓN PARA LOS 10 USUARIOS DE PRUEBA
-- CONTRASEÑA COMÚN: Temporal2026!
-- =============================================================================

-- 1. Asegurar que los 10 usuarios en auth.users tengan correo confirmado y tokens limpios
-- NOTA: NO incluir 'confirmed_at' ya que en PostgreSQL/Supabase es una columna GENERADA.
UPDATE auth.users
SET email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
    last_sign_in_at = NOW(),
    raw_app_meta_data = '{"provider":"email","providers":["email"]}'::jsonb,
    is_sso_user = false,
    confirmation_token = COALESCE(confirmation_token, ''),
    recovery_token = COALESCE(recovery_token, ''),
    email_change = COALESCE(email_change, ''),
    email_change_token_new = COALESCE(email_change_token_new, ''),
    email_change_token_current = COALESCE(email_change_token_current, ''),
    phone_change = COALESCE(phone_change, ''),
    phone_change_token = COALESCE(phone_change_token, ''),
    reauthentication_token = COALESCE(reauthentication_token, '')
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
