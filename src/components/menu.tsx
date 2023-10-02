"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div
        className="bg-darkGrey-500 w-14 h-14 rounded-xl ml-4 mt-4 flex flex-col justify-center items-center border-2 border-primary-500 fixed z-10"
        onClick={handleClick}
      >
        <div>
          <div
            className={`bg-primary-500 w-8 h-1 rounded-sm my-2 transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-3" : "-translate-y-0.5"
            }`}
          ></div>
          <div
            className={`bg-primary-500 w-8 h-1 rounded-sm my-2 transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`bg-primary-500 w-8 h-1 rounded-sm my-2 transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-3" : "translate-y-0.5"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`bg-white h-screen w-4/5 rounded-lg flex flex-col transition-all duration-300 ease-in ${
          isOpen ? "w-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-1/4 w-3/4 text-center justify-between m-auto text-primary-500 relative">
          <Link
            href={"/profile"}
            className={`h-10 pt-2 ${
              pathname == "/profile"
                ? "bg-primary-500 rounded-xl text-white"
                : "bg-transparent"
            }`}
          >
            <h1>Meu Perfil</h1>
          </Link>
          <Link
            href={"/deposit"}
            className={`h-10 pt-2 ${
              pathname == "/deposit"
                ? "bg-primary-500 rounded-xl text-white"
                : "bg-transparent"
            }`}
          >
            <h1>Depositar</h1>
          </Link>
          <Link
            href={"/points"}
            className={`h-10 pt-2 ${
              pathname == "/profile"
                ? "bg-primary-500 rounded-xl text-white"
                : "bg-transparent"
            }`}
          >
            <h1>Trocar Pontos</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
