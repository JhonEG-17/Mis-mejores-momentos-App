import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Mis Mejores Momentos</h1>
      <p className="text-xl mb-8">Gestión de álbumes fotográficos</p>
      
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-3 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100">
          Iniciar Sesión
        </Link>
        
        <Link href="/registro" className="px-6 py-3 border-2 border-white font-bold rounded hover:bg-white hover:text-blue-600 transition">
          Registrarse
        </Link>

        <Link href="/dashboard" className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-900">
          Ver Demo Privada
        </Link>
      </div>
    </main>
  );
}
