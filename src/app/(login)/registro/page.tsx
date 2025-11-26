"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { validarFormularioRegistro } from "@/utils/validaciones";
import { RegistroFormData, ErroresFormulario } from "@/types";

export default function RegistroPage() {
  // Estado tipado con la interfaz
  const [form, setForm] = useState<RegistroFormData>({
    usuario: "",
    password: "",
    repitePassword: "",
    email: "",
    sexo: "",
    fechaNacimiento: "",
  });

  const [errores, setErrores] = useState<ErroresFormulario>({});

  // Manejador de cambios tipado correctamente para inputs y selects
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Manejador de envío
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const erroresEncontrados = validarFormularioRegistro(form);

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
    } else {
      setErrores({});
      alert("¡Registro Exitoso! Datos validados con TypeScript.");
      console.log("Datos enviados:", form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 p-4">
      <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-white/10 p-8  rounded-2xl shadow-md w-full max-w-md text-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Registro</h2>

        {/* Usuario */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">Usuario</label>
          <input
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          />
          {errores.usuario && <p className="text-red-500 text-xs mt-1">{errores.usuario}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          />
          {errores.password && <p className="text-red-500 text-xs mt-1">{errores.password}</p>}
        </div>

        {/* Repetir Password */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">Repetir Contraseña</label>
          <input
            type="password"
            name="repitePassword"
            value={form.repitePassword}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          />
          {errores.repitePassword && <p className="text-red-500 text-xs mt-1">{errores.repitePassword}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          />
          {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
        </div>

        {/* Sexo */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-1">Sexo</label>
          <select
            name="sexo"
            value={form.sexo}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          >
            <option value="">Seleccione...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
          {errores.sexo && <p className="text-red-500 text-xs mt-1">{errores.sexo}</p>}
        </div>

        {/* Fecha */}
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-1">Fecha Nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={form.fechaNacimiento}
            onChange={handleChange}
            className="w-full bg-white p-2 rounded"
          />
          {errores.fechaNacimiento && <p className="text-red-500 text-xs mt-1">{errores.fechaNacimiento}</p>}
        </div>

        <button type="submit" className="w-full bg-white text-purple-800 p-2 rounded hover:bg-purple-800 hover:text-white font-bold">
          Registrarse
        </button>
      </form>
    </div>
  );
}