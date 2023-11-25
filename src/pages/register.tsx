"use client";
import Head from "next/head";
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import CheckBox from "@/components/checkBox";
import { useState } from "react";
import { createUser } from "@/services/api";
import Popup from "@/components/popup";

const passwordRegex =
  /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*(?=.*\d)(?=.*[A-Z]).{6,}$/;

export default function Register() {
  const [checkTerm, setCheckTerm] = useState(false);
  const [checkShare, setCheckSare] = useState(false);
  const [checkboxError, setcheckboxError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("title");
  const [popupContent, setPopupContet] = useState("content");

  const user = {
    name_user: " ",
    email: " ",
    password_user: " ",
    share_data: checkShare,
    terms_conditions: checkTerm,
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const isValidPassword = passwordRegex.test(user.password_user);
      if (isValidPassword) {
        console.log(user)
        if (checkTerm) {
          const response = await createUser(
            user.name_user,
            user.email,
            user.password_user,
            user.terms_conditions,
            user.share_data
          );

          console.log(response)

          if (response.status == 500) {
            setPopupTitle("Erro!");
            setPopupContet(
              "Tivemos um problema interno mas logo será resolvido! =)"
            );
            setIsOpen(true);
            return;
          }

          if (response.status == 422) {
            setPopupTitle("Erro!");
            setPopupContet("Email ja cadastrado!");
            setIsOpen(true);
          } else {
            console.log("deu bom");
          }
        } else {
          setcheckboxError(true);
        }
      } else {
        setPopupTitle("Senha Invalida!");
        setPopupContet(
          "A senha não segue aos requisitos mínimos de:\n -1 caracter especial\n -1 letra maíuscula\n -1 numero\n -Conter no mínimo 6 caracteres"
        );
        setIsOpen(true);
      }
    } catch (error) {}
  };

  return (
    <main className="bg-[url('../../public/img/bg-login-mobile.png')] bg-cover bg-center w-screen h-screen flex justify-center lg:bg-[url('../../public/img/bg-login.png')]">
      <Head>
        <title>Cadastro</title>
      </Head>
      <Popup
        isOpen={isOpen}
        title={popupTitle}
        content={popupContent}
        setOpen={setIsOpen}
      />
      <div className="flex h-screen w-screen">
        <div className="flex flex-col m-auto w-4/5 h-4/5 bg-darkGrey-500/30 rounded-2xl md:text-4xl lg:w-2/5">
          <div className="grid grid-cols-2 px-2 gap-1 w-full justify-around mt-8 md:mt-16 md:gap-10">
            <Link href={"/login"}>
              <Button color="disabledTwo">LOG-IN</Button>
            </Link>
            <Link href={"/register"}>
              <Button color="third">CADASTRO</Button>
            </Link>
          </div>
          <form
            className="flex flex-col mt-9 text-center mx-auto md:mt-16"
            onSubmit={handleSubmit}
          >
            <h1 className=" text-4xl font-audiowide text-primary-500 md:text-6xl">
              Cadastro
            </h1>
            <div className="grid grid-rows-2 gap-8 h-36 mt-14 md:gap-10 md:h-60">
              <Input
                color="primary"
                type="text"
                placeholder="Nome completo"
                onKeyUp={(e: any) => {
                  user.name_user = e.target.value;
                }}
                required
              />
              <Input
                color="primary"
                type="text"
                placeholder="Email"
                onKeyUp={(e: any) => {
                  user.email = e.target.value;
                }}
                required
              />
              <Input
                color="primary"
                type="password"
                placeholder="Senha"
                onKeyUp={(e: any) => {
                  user.password_user = e.target.value;
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-4 mt-6 text-black/50 text-sm">
              <div
                className="flex gap-2 "
                onClick={() => {
                  setCheckSare(!checkShare);
                }}
              >
                <CheckBox
                  color={checkShare ? "checked" : "primary"}
                  checked={checkShare}
                />
                <p className={checkShare ? "text-primary-500" : " "}>
                  Aceito compartilhar meus dados
                </p>
              </div>
              <div
                className="flex gap-2"
                onClick={() => {
                  setCheckTerm(!checkTerm);
                  if (checkboxError) {
                    setcheckboxError(false);
                  }
                }}
              >
                <CheckBox
                  color={
                    checkboxError ? "error" : checkTerm ? "checked" : "primary"
                  }
                  checked={checkTerm}
                />
                <p
                  className={
                    checkboxError
                      ? "text-red-500/60"
                      : checkTerm
                      ? "text-primary-500"
                      : " "
                  }
                >
                  Aceito os termos e condições
                </p>
              </div>
            </div>
            <div className="mt-6 h-10 md:mt-24 md:h-20">
              <Button type="submit" color="primary">
                Entrar
              </Button>
              <Link href={"/recovery"}>
                <Button color="secondary">Esqueceu a senha ?</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
