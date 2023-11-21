"use client";
import Button from "@/components/button";
import { countBatteries } from "@/services/api";
import { setCookie } from "nookies";
import { useRef } from "react";

export default function Start(props: any) {
  let display = useRef(props.display)

  const handleClick = () => {
    const batteries = countBatteries()
    console.log(batteries)
  }

  return (
    <div className="h-20 my-auto md:h-40" onClick={() => {
      props.setDisplay(1)
    }}>
      <Button type="submit" color="fourth">
        <div className="flex w-full justify-between text-2xl px-2 md:text-6xl" onClick={handleClick}>
          <h1>Iniciar</h1>
          <h1>➜</h1>
        </div>
      </Button>
    </div>
  );
}
