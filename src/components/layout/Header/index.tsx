"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex w-full sticky top-0 left-0 bg-blue-500 justify-between md:justify-evenly items-center text-center p-2 z-1">
        <Link href="/">
          <Image className=" hover:scale-110 transition duration-300" src={"/logo.svg"} alt={"logo Mis Mejores Momentos App"} width={25} height={25} />
        </Link>
        <Navbar isMenuOpen={isMenuOpen} />
        <button className="flex md:hidden" onClick={toggleMenu}>
          <Image src={"/iconMenu.svg"} alt={"Botón de menú"} width={25} height={25} />
        </button>
      </header>
    </>
  );
}