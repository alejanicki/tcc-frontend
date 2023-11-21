"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Menu from "@/components/menu";
import { Private } from "@/components/private";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cepCheck, getUser } from "@/services/api";

export default function Register() {
  const { handleSubmit }: any = useForm();

  const loadUser = () => {
    const loadUser = getUser();

    const user = {
      name: loadUser.name,
      email: loadUser.email,
      address: loadUser.address,
      neighborhood: loadUser.neighborhood,
      cep: loadUser.cep,
      city: loadUser.city,
      state: loadUser.state,
      oldPassword: null,
      newPassword: null,
    };

    return user;
  };

  const getAddress = () => {
    const cepCheck = cepCheck(address.cep);

    const address = {
      cep: null,
      address: null,
      number: null,
      neighborhood: null,
      city: null,
      state: null,
    };
    return address;
  };

  const [user, setUser]: any = useState(loadUser());

  const [address, setAddress]: any = useState();

  const updateUser = () => {
    console.log(user);
    console.log("submit");
  };

  return (
    <main className="bg-lightGrey-500">
      <Menu />
      <div className="flex h-screen">
        <div className="flex flex-col m-auto w-4/5 h-4/5 bg-white rounded-2xl ">
          <div className="grid grid-cols-2 px-2 gap-1 w-full justify-around mt-8 md:mt-16 "></div>
          <form
            className="flex flex-col mt-9 text-center mx-auto md:mt-16"
            onSubmit={handleSubmit(updateUser)}
          >
            <h1 className=" text-4xl font-audiowide text-primary-500 ">
              Usuário
            </h1>
            <div className="grid grid-rows-3 gap-6 h-26 mt-14 ml-2 mr-2">
              <Input
                type="text"
                defaultValue={user.name}
                placeholder="Nome completo"
                onChange={(e: any) => {
                  user.name = e.target.value;
                }}
              />
              <Input
                type="text"
                placeholder="Email"
                defaultValue={user.email}
                onChange={(e: any) => {
                  address.email = e.target.value;
                }}
              />
              <div className="grid grid-cols-3 gap-6">
                <Input
                  type="text"
                  placeholder="CEP "
                  defaultValue={address.cep}
                  onChange={(e: any) => {
                    address.cep = e.target.value;
                  }}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  defaultValue={address.city}
                  onChange={(e: any) => {
                    address.city = e.target.value;
                  }}
                />
                <Input
                  type="text"
                  placeholder="Estado"
                  defaultValue={address.state}
                  onChange={(e: any) => {
                    address.state = e.target.value;
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Endereço"
                  defaultValue={address.address}
                  onChange={(e: any) => {
                    address.address = e.target.value;
                  }}
                />
                <Input
                  type="text"
                  placeholder="Bairro"
                  defaultValue={address.neighborhood}
                  onChage={(e: any) => {
                    address.neighborhood = e.target.value;
                  }}
                />
              </div>
              <Input type="text" placeholder="Senha Antiga" />
              <Input type="text" placeholder="Nova Senha" />
            </div>
            <div className="mt-4 center h-10 md:mt-24 md:h-20">
              <Button
                className="bg-primary-500 text-white font-audiowide h-full rounded-full p-2"
                type="submit"
              >
                Atualizar
              </Button>
              <Button type="submit" color="secondary">
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
