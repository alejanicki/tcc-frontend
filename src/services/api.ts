import axios from "axios";
import { parseCookies, setCookie } from "nookies";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const getDate = () => {
  const dataAtual = new Date();

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
  const dia = dataAtual.getDate();

  return `${ano}-${mes}-${dia}`;
};

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

export const createUser = async (
  name_user: string,
  email: string,
  password_user: string,
  terms_conditions: string,
  share_data: string
) => {
  const params = {
    name_user: name_user,
    email: email,
    password_user: password_user,
    terms_conditions: terms_conditions,
    share_data: share_data,
  };

  return api.post("/user/create", params)
};

export const getUserInfo = () => {
  const { "nextauth.token": token }: any = parseCookies();
  return api.get("/user/read-id", token);
};

export const countBattery = () => {
  const { "battery.quantity": insertQuantity }: any = parseCookies();
  return axios.get(
    `http://127.0.0.1:8000/deposit/battery-count?battery_quantity=${insertQuantity}`
  );
};

export const createDeposit = () => {
  getUserInfo().then((ress: any) => {
    const { "valid.batteries": validBatteris }: any = parseCookies();
    const userInfo = ress.data;
    const earnedCredits = validBatteris * 1;
    const date = getDate();
    const params = {
      date_deposit: date,
      id_user: userInfo.id,
      earned_credit: earnedCredits,
      id_battery: 3,
      number_of_batteries: validBatteris,
    };
    api.post("/deposit/create", params).then((ress: any) => {
      console.log(ress.data);
      setCookie(undefined, "earned.credits", earnedCredits.toString());
      setCookie(undefined, "deposited.batteries", ress.data.value);
    });
  });
};

export const cepCheck = async (cep: number) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {}
};
