import Link from "next/link";
import "@fontsource/audiowide";
import Button from "@/components/button";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-[url('../../public/img/bg-lp.png')] bg-cover w-screen h-screen flex justify-center">
      <Head>
        <title>GreenTech Solutions</title>
      </Head>
      <div className="flex flex-col h-5/6 my-auto mx-10 rounded-xl justify-center">
        <div className="flex flex-col text-center my-auto">
          <h1 className=" font-audiowide text-white text-4xl mb-6 md:text-8xl md:mb-12">
            E-WASTE
          </h1>
          <p className=" text-white text-lg md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            erat purus. Proin consequat tellus non neque mattis luctus.
            Pellentesque at purus in elit gravida ullamcorper. Curabitur non
            tristique lectus. Ut et ex id metus malesuada ullamcorper.
          </p>
        </div>
        <div className="flex flex-col my-auto mx-auto w-full justify-center md">
          <div className="h-12 md:h-24 md:text-2xl">
            <Link href={"/login"}>
              <Button color="third">DEPOSITAR</Button>
            </Link>
            <Link href={"/register"}>
              <Button color="primary">SEJA UM PARCEIRO</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
