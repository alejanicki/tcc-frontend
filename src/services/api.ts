import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const authLogin = (email: string, password: string) => {
  const params = new URLSearchParams();
  params.append("username", email);
  params.append("password", password);
  return api.post("/auth/login", params);
};

export const checkToken = () => {
  const { "nextauth.token": token }: any = parseCookies();

  return api.get("/user/read-id", token);
};

export const getUser = () => {
  // try {
  //   const { "nextauth.token": token }: any = parseCookies();

  //   const response = await api.get("/user/read-id", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });

  //   return response.data; 
  // } catch (XMLHttpRequest) {
  //   throw {'message': 'api conection failed'}; 
  // }

  const response = { 
    name: "Alessandro Janicki",
    email: "Alessandro@teste.com",
    address: null,
    neighborhood: null,
    cep: null,
    city: null,
    state: null,
    oldPassword: null,
    newPassword: null,
  }

  return response;
};

export const countBatteries = () => {
  return api.get("/deposit/battery-count");
};

export const createDeposit = () => {
  console.log("deposito criado");
  return api.post("/deposit/create");
};

export const cepCheck = async (cep: number) => {

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data
  } catch (error) {
    
  }
};
