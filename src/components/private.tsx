import { checkToken } from "@/services/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Private = ({ children }: any) => {
  const nav = useRouter();

  useEffect(() => {
    checkToken()
      .then((ress) => {
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
        nav.push("/login");
      });
  }, []);

  return children;
};
