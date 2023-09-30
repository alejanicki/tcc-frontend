import Button from "@/components/button";
import Link from "next/link";
import "@fontsource/audiowide";

export default function Home() {
  return (
    <main className="bg-[url('../../public/img/bg-lp-mobile.png')] bg-cover w-screen h-screen xl:bg-[url('../../public/img/bg-lp.png')]">
      <div>
        <div className="min-w-screen min-h-screen grid grid-cols-2">
          <div className="flex-col m-auto text-center">
            <h1 className=" text-6xl font-audiowide text-white mb-14 xl:text-8xl">
              E-WASTE
            </h1>
            <p className="text-3xl text-white mx-10 xl:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              erat purus. Proin consequat tellus non neque mattis luctus.
              Pellentesque at purus in elit gravida ullamcorper. Curabitur non
              tristique lectus. Ut et ex id metus malesuada ullamcorper.
            </p>
          </div>
          <div className=" flex-col justify-center mx-14 my-auto text-3xl xl:ml-48 xl:mr-2 xl:text-5xl">
            <Link href={"/login"}>
              <Button color="primary" style={{width: '88%', height: '115px'}}>DEPOSITAR</Button>
            </Link>
            <Link href={"/register"}>
              <Button color="secondary" style={{width: '88%', height: '115px'}}>SEJA UM PARCEIRO</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}