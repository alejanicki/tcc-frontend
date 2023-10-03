"use client";
import Menu from "@/components/menu";
import Start from "./components/start";
import Quantity from "./components/quantity";
import Button from "@/components/buton";
import Insert from "./components/insert";
import Thanks from "./components/thanks";
import { useState } from "react";

export default function Deposit() {

    const [display, setDisplay] = useState(0)

    const pageDisplay = () => {
        switch (display) {
            case 0:
                return (<Start/>)
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

  return (
    <main className="bg-darkGrey-500 w-screen h-screen">
      <Menu />
      <div className="flex w-4/5 h-full mx-auto">
        <div className="bg-white max-h-full w-full my-10 rounded-3xl flex flex-col justify-center">
          <div className=" w-3/4 h-5/6 m-auto flex flex-col justify-between">
            {pageDisplay()}    
            <div className={`w-full flex justify-end ${display == 0 ? "hidden" : ""}`}>
              <div className="flex flex-row-reverse w-2/4 md:h-14 md:text-xl">
                <Button color="primary" onClick={() => {
                    setDisplay(display+1)
                    console.log(display)
                }}>Continuar</Button>
                <Button color="secondary" onClick={() => {
                    setDisplay(display-1)
                    console.log(display)
                }}>Voltar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
