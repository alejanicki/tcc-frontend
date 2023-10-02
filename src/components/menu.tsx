"use client";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div
        className="bg-darkGrey-500 w-14 h-14 rounded-xl ml-4 mt-4 flex flex-col justify-center items-center border-2 border-primary-500 fixed"
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
        className={`bg-white h-screen w-4/5 rounded-lg flex flex-col${
          isOpen ? "w-3/4" : "w-0"
        }`}
      >
        <div className="m-auto text-primary-500 text-center">
            <div className="h-10 mb-2">
                <h1>Meu Perfil</h1>
            </div>
            <div className="h-10 mb-2">
                <h1>Depositar</h1>
            </div>
            <div className="h-10">
                <h1>Trocar Pontos</h1>
            </div>
        </div>
      </div>
    </main>
  );
}
