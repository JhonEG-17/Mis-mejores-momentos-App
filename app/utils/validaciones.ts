// app/utils/validaciones.ts
import { RegistroFormData, ErroresFormulario } from "../types";

export const validarFormularioRegistro = (datos: RegistroFormData): ErroresFormulario => {
    const errores: ErroresFormulario = {};

    // 1. Validar Usuario: Letras y números, 3-10 caracteres
    const regexUsuario = /^[a-zA-Z0-9]{3,10}$/;
    if (!datos.usuario || !regexUsuario.test(datos.usuario)) {
        errores.usuario = "El usuario debe tener 3-10 caracteres alfanuméricos.";
    }

    // 2. Validar Contraseña: 8-12 chars, 1 Mayus, 1 Minus, 1 Num, guion bajo
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_]{8,12}$/;
    if (!datos.password || !regexPass.test(datos.password)) {
        errores.password = "La contraseña debe tener 8-12 caracteres, mayúscula, minúscula, número y guion bajo.";
    }

    // 3. Repetir Contraseña
    if (datos.password !== datos.repitePassword) {
        errores.repitePassword = "Las contraseñas no coinciden.";
    }

    // 4. Email: Dominio entre 2 y 4 letras
    const regexEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,4}$/i;
    if (!datos.email || !regexEmail.test(datos.email)) {
        errores.email = "Email inválido (el dominio debe tener 2-4 letras).";
    }

    // 5. Sexo y Fecha
    if (!datos.sexo) errores.sexo = "Selecciona tu sexo.";
    if (!datos.fechaNacimiento) errores.fechaNacimiento = "La fecha es obligatoria.";

    return errores;
};