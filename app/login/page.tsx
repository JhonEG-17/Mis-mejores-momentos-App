// app/login/page.tsx
"use client";
import { useState, FormEvent } from "react";
import { validarLogin } from "../utils/validaciones"; // Importamos la nueva función
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [errores, setErrores] = useState<{ usuario?: string; password?: string }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí ejecutamos la validación que pide la actividad
    const erroresEncontrados = validarLogin(form.usuario, form.password);

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
    } else {
      setErrores({});
      alert(`¡Bienvenido, ${form.usuario}! Accediendo al sistema...`);
      // Aquí iría la redirección al dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm text-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Iniciar Sesión</h2>

        {/* Campo Usuario */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1">Usuario</label>
          <input
            type="text"
            value={form.usuario}
            onChange={(e) => setForm({ ...form, usuario: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Ingresa tu usuario"
          />
          {/* Mensaje de error si envía espacios vacíos */}
          {errores.usuario && <p className="text-red-500 text-xs mt-1">{errores.usuario}</p>}
        </div>

        {/* Campo Contraseña */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Contraseña</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="********"
          />
          {errores.password && <p className="text-red-500 text-xs mt-1">{errores.password}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-bold mb-4">
          Entrar
        </button>

        <p className="text-center text-sm">
            ¿No tienes cuenta? <Link href="/registro" className="text-blue-500 underline">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}