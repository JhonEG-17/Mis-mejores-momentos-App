import Link from "next/link";

export default function Navbar({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <>
      {/* Menú para escritorio */}
      <nav className="hidden md:flex w-full justify-end items-center text-center gap-3 m-0 text-white">
        <Link href="/" className="text-lg hover:scale-110 transition duration-300">Inicio</Link>
        <Link href="/login" className="text-lg hover:scale-110 transition duration-300">Iniciar Sesión</Link>
        <Link href="/registro" className="text-lg hover:scale-110 transition duration-300">Registrarse</Link>
      </nav>

      {/* Menú para móvil */}
      <nav className={`absolute top-full left-0 w-full bg-white md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center text-center gap-3 m-0 py-4 text-white`}>
        <Link href="/" className="text-lg hover:scale-110 transition duration-300 hover:bg-gray-200 w-full text-purple-700">Inicio</Link>
        <Link href="/login" className="text-lg hover:scale-110 transition duration-300 hover:bg-gray-200 w-full text-purple-700">Iniciar Sesión</Link>
        <Link href="/registro" className="text-lg hover:scale-110 transition duration-300 hover:bg-gray-200 w-full text-purple-700">Registrarse</Link>
      </nav>
    </>
  );

}