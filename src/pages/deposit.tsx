"use client";
import Menu from "@/components/menu";
import Start from "../components/deposit/start";
import Quantity from "../components/deposit/quantity";
import Button from "@/components/button";
import Insert from "../components/deposit/insert";
import Thanks from "../components/deposit/thanks";
import { useState } from "react";
import { Private } from "@/components/private";

export default function Deposit() {
  const [display, setDisplay] = useState(0);

  const pageDisplay = () => {
    switch (display) {
      case 0:
        return <Start setDisplay={setDisplay} />;
      case 1:
        return <Insert />;
      case 2:
        return <Thanks />;
      default:
        break;
    }
  };


  return (
    <Private>
      <main className="bg-darkGrey-500 w-screen h-screen xl:grid xl:grid-cols-3 xl:auto-cols-auto">
        <Menu />
        <div className="flex w-4/5 h-full mx-auto lg:col-span-2">
          <div className="bg-white max-h-full w-full my-10 rounded-3xl flex flex-col justify-center">
            <div className=" w-3/4 h-5/6 m-auto flex flex-col justify-between">
              {pageDisplay()}
              <div
                className={`w-full flex ${
                  display != 2 ? "justify-end" : "justify-center"
                } ${display == 0 ? "hidden" : ""}`}
              >
                <div
                  className={`flex md:h-16 md:text-3xl lg:text-4xl ${
                    display != 2
                      ? "w-2/4 flex-row-reverse"
                      : "flex-col mb-6 w-full md:mb-28"
                  }`}
                >
                  <Button
                    color="primary"
                    onClick={() => {
                      setDisplay(display != 2 ? display + 1 : 0);
                    }}
                  >
                    {display != 2 ? "Continuar" : "Finalizar"}
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => {
                      setDisplay(display != 2 ? display - 1 : 1);
                    }}
                  >
                    {display != 2 ? "Voltar" : "Depositar +"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Private>
  );
}
