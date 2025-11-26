// app/data/posts.ts

export interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
  solution: string;
}

export const knowledgeBase: Post[] = [
  {
    id: "validacion-regex",
    title: "Validación de Formularios con RegEx",
    category: "Lógica de Programación",
    content: "Uno de los principales retos fue asegurar que el usuario no ingresara campos vacíos o solo espacios en blanco en el Login. La validación estándar de HTML 'required' no era suficiente para detectar cadenas de espacios.",
    solution: "Se implementó una función personalizada en TypeScript utilizando el método .trim() y Expresiones Regulares. Esto permite limpiar la entrada antes de validarla, asegurando que '   ' sea tratado como un campo vacío."
  },
  {
    id: "tipado-typescript",
    title: "Tipado Estricto con Interfaces",
    category: "TypeScript",
    content: "Al manejar el estado de los formularios con useState, existía el riesgo de intentar acceder a propiedades que no existían o asignar tipos de datos incorrectos (números en vez de strings).",
    solution: "Se creó una interfaz 'RegistroFormData' en la carpeta /types. Esto actúa como un contrato que obliga a que el estado inicial y las actualizaciones cumplan estrictamente con la estructura definida."
  },
  {
    id: "arquitectura-nextjs",
    title: "Estructura de Carpetas (App Router)",
    category: "Arquitectura",
    content: "Definir una estructura que separara la lógica de la vista fue complejo. Necesitábamos que el código fuera mantenible y escalable, evitando archivos gigantes con todo el código mezclado.",
    solution: "Se adoptó una arquitectura modular. '/app' maneja solo las rutas y vistas. '/utils' aísla la lógica pura (scripts de validación) y '/components' maneja la interfaz reutilizable. Esto facilita la lectura y el mantenimiento."
  }
];