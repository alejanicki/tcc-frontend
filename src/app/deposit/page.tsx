"use client";
import Menu from "@/components/menu";
import Start from "./components/start";
import Quantity from "./components/quantity";
import Button from "@/components/button";
import Insert from "./components/insert";
import Thanks from "./components/thanks";
import { useState } from "react";

export default function Deposit() {

    const [display, setDisplay] = useState(0)

    const pageDisplay = () => {
        switch (display) {
            case 0:
                return (<Start setDisplay={setDisplay}/>)
            case 1:
                return (<Quantity />)
            case 2:
                return (<Insert/>)
            case 3:
                return (<Thanks/>)
            default:
                break;
        }
    }

    const logout = () => {
      
    }

  return (
    <main className="bg-darkGrey-500 w-screen h-screen lg:grid lg:grid-cols-3 lg:auto-cols-auto">
      <Menu />
      <div className="flex w-4/5 h-full mx-auto lg:col-span-2">
        <div className="bg-white max-h-full w-full my-10 rounded-3xl flex flex-col justify-center">
          <div className=" w-3/4 h-5/6 m-auto flex flex-col justify-between">
            {pageDisplay()}    
            <div className={`w-full flex ${display != 3 ? "justify-end" : "justify-center" } ${display == 0 ? "hidden" : ""}`}>
              <div className={`flex md:h-16 md:text-3xl lg:text-4xl ${display != 3 ? "w-2/4 flex-row-reverse" : "flex-col mb-6 w-full md:mb-28"}`}>
                <Button color="primary" onClick={() => {
                    setDisplay(display != 3 ? display+1 : 0)
                }}>{display != 3 ? "Continuar" : "Finalizar"}</Button>
                <Button color="secondary" onClick={() => {
                    setDisplay(display != 3 ? display-1 : 1)
                }}>{display != 3 ? "Voltar" : "Depositar +"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
