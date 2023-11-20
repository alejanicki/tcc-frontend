import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
  });

  export const authLogin = (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append("username", email);
    params.append("password", password);
    return api.post("/auth/login", params);
  };

  export const checkToken = () => {
    const { 'nextauth.token': token }: any = parseCookies()
  
    return api.get("/user/read-id", token);
    
  };

  export const cepCheck = (cep: number) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  };