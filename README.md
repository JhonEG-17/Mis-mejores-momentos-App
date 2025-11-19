# Mis Mejores Momentos 📸 (Next.js Version)

Sistema web para la gestión de álbumes de fotos multiusuario. Este proyecto es la implementación práctica de la "Experiencia de Aprendizaje: Entorno de programación" de la asignatura **Aplicaciones Web (LAIT704)**, desarrollado utilizando **Next.js** para demostrar una arquitectura escalable y modular.

## 📋 Descripción del Proyecto

El objetivo es desarrollar la estructura física y lógica de una aplicación web y validar la integridad de los datos en el cliente. A diferencia de un sitio estático tradicional, este proyecto utiliza **Next.js (React)** para gestionar la estructura lógica mediante componentes reutilizables y un sistema de enrutamiento basado en archivos (File-System Routing).

El portal permite simular el registro de usuarios, gestión de álbumes y visualización pública, cumpliendo con las reglas de negocio y validaciones estrictas solicitadas en el incidente crítico.

## Autor
- Nombre: Jhonatan Espinal Garcia

- Asignatura: Aplicaciones Web

- Unidad: 2 - Entorno de Programación

- Fecha: 19 Noviembre 2025

- Proyecto desarrollado con fines académicos para la Universidad Nacional Rosario Castellanos.

## 🚀 Funcionalidades Implementadas

### 1. Arquitectura y Estructura (Unidad 2)
Se sustituye la estructura física tradicional por una arquitectura de componentes moderna:
- **Estructura Física (File System Routing):** La navegación se define por la jerarquía de carpetas en el directorio `app/` (o `pages/`), mapeando automáticamente la estructura lógica solicitada.
- **Componentización:** Uso de componentes aislados (`Navbar`, `Footer`, `Forms`) para mejorar la mantenibilidad.
- **Assets Estáticos:** Gestión optimizada de imágenes y fuentes desde la carpeta `public/`.

### 2. Validaciones del Lado del Cliente (Client-Side Validation)
Se utiliza **"use client"** y Hooks de React (`useState`, `useEffect`) para validar los formularios en tiempo real antes del envío:

* **Login:** Control de inputs vacíos y saneamiento de espacios.
* **Registro de Usuarios:** Validaciones complejas mediante **Expresiones Regulares (RegEx)** integradas en los manejadores de eventos del componente:
    * Usuario (Alfanumérico, 3-10 chars).
    * Contraseña (Reglas de seguridad estrictas: Mayús, minús, número, guion bajo).
    * Email (Validación de formato y longitud de dominio).
    * Fecha (Obligatoriedad).

### 3. Ordenamiento Dinámico
Implementación de lógica de ordenamiento (sort) en el cliente para visualizar listas de fotografías por Título, Fecha o Autor sin recargar la página.

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (React Framework).
* **Lenguaje:** JavaScript (ES6+) / JSX.
* **Estilos:** CSS Modules (o Tailwind CSS, según tu configuración) para estilos encapsulados.
* **Validación:** Lógica personalizada con JavaScript estándar y RegEx.

## 📂 Estructura del Proyecto

La estructura de directorios refleja una organización profesional basada en roles:

```text
/mis-mejores-momentos
│
├── /app                # (App Router) Contiene la estructura lógica y rutas
│   ├── /login          # Ruta: [dominio.com/login](https://dominio.com/login)
│   ├── /registro       # Ruta: [dominio.com/registro](https://dominio.com/registro)
│   ├── /dashboard      # Ruta: [dominio.com/dashboard](https://dominio.com/dashboard) (Parte Privada)
│   └── page.js         # Página Principal (Landing Page)
│
├── /components         # Bloques reutilizables (Navbar, Footer, PhotoCard)
│   └── /forms          # Componentes de formulario con lógica de validación
│
├── /public             # Archivos estáticos (Imágenes de muestra, iconos)
│
└── README.md           # Documentación del proyecto