import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";

export default function Login() {
  return (
    <main className="bg-[url('../../public/img/bg-login-mobile.png')] bg-cover bg-center w-screen h-screen">
      <div className="flex h-screen">
        <div className="flex-col m-auto w-4/5 h-auto p-3 bg-darkGrey-500/30 rounded-2xl md:h-4/5">
          <div className="flex flex-col h-full my-auto justify-center">
            <div className="flex max-w-full">
              <div className="flex w-full justify-around mt-10">
                <Link href={"/login"}>
                  <Button
                    color="third"
                    style={{ width: "120px", height: "35px" }}
                  >
                    LOG-IN
                  </Button>
                </Link>
                <Link href={"/register"}>
                  <Button
                    color="disabledTwo"
                    style={{ width: "120px", height: "35px" }}
                  >
                    CADASTRO
                  </Button>
                </Link>
              </div>
            </div>
            <h1 className=" mx-auto text-center text-primary-500 text-2xl font-audiowide my-5">
              LOG IN
            </h1>
            <form className="flex-col mx-4">
              <div>
                <Input
                  color="primary"
                  type="text"
                  placeholder="User"
                  style={{ marginBottom: "20px", height: "40px" }}
                />
                <Input
                  color="primary"
                  type="password"
                  placeholder="Senha"
                  style={{ marginBottom: "20px", height: "40px" }}
                />
              </div>
              <div className="flex flex-row-reverse font mb-5">
                <Button
                  type="submit"
                  color="primary"
                  style={{ width: "100%", padding: "7px auto" }}
                >
                  Entrar
                </Button>
                <Link href={"/recovery"} style={{width: "100%"}}>
                  <Button
                    color="secondary"
                    style={{ padding: "7px auto" }}
                  >
                    Esqueceu a senha ?
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
