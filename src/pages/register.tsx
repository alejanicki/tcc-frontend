"use client";
import Head from "next/head";
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";

export default function Register() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <main className="bg-[url('../../public/img/bg-login-mobile.png')] bg-cover bg-center w-screen h-screen lg:bg-[url('../../public/img/bg-login.png')]">
      <Head>
        <title>Deposit</title>
      </Head>
      <div className="flex h-screen">
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
              <Input color="primary" type="text" placeholder="Nome completo" />
              <Input color="primary" type="text" placeholder="Email" />
              <Input color="primary" type="password" placeholder="Senha" />
            </div>
            <div className="mt-12 h-10 md:mt-24 md:h-20">
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
