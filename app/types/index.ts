// app/types/index.ts

export interface RegistroFormData {
    usuario: string;
    password: string;
    repitePassword: string;
    email: string;
    sexo: string;
    fechaNacimiento: string;
}

export interface ErroresFormulario {
    // Las claves son las mismas propiedades de RegistroFormData, pero los valores son mensajes de error (strings)
    [key: string]: string; 
}