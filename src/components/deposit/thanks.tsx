"use client";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export default function Thanks() {
  const [userPoints, setUserPoints] = useState("XXXX");
  const [depositedBatteries, setDepositedBatteries] = useState("XXXX");
  useEffect(() => {
    const { "earned.credits": earnedCredits }: any = parseCookies();
    const { "deposited.batteries": depositedBatteries }: any = parseCookies();
    setUserPoints(earnedCredits);
    setDepositedBatteries(depositedBatteries)
  }, []);

  return (
    <div className="w-full h-full text-center my-32 md:my-64">
      <h1 className="font-audiowide text-primary-500 text-xl md:text-5xl">
        Obrigado por ser +Verde!
      </h1>
      <div className="mt-6 mx-auto w-3/6 flex justify-between text-black/50 md:mt-14 md:text-2xl">
        <p>Pontos:</p>
        <p>{userPoints}</p>
        <p>Pilhas depositadas:</p>
        <p>{depositedBatteries}</p>
      </div>
    </div>
  );
}
