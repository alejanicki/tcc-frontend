import Input from "@/components/input";
import { setCookie } from "nookies";
import Popup from "../popup";
import { useState } from "react";

export default function Quantity(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("title");
  const [popupContent, setPopupContet] = useState("content");
  const [isBtnDisable, setIsBtnDisable] = useState(true)

  return (
    <div>
      
      <h1 className="font-audiowide text-primary-500 text-xl text-center mb-28 md:text-4xl md:mb-56">
        Qual a quantidade de pilhas ?
      </h1>
      <div className="flex bg-lightGrey-500/50 rounded-md h-14 text-sm md:h-24 md:text-xl">
        <Input
          color="third"
          type="number"
          onChange={(e: any) => {
            if (e.target.value == 0) {
              setIsOpen(true);
              setPopupTitle("Atenção!");
              setPopupContet("O valor precisa ser maior que 0!");
            } else {
              const insertQuantity = e.target.value;
              setCookie(
                undefined,
                "battery.quantity",
                insertQuantity.toString()
              );
            }
          }}
        />
        <p className="font-audiowide text-black/50 my-auto pr-2">Un.</p>
      </div>
    </div>
  );
}
