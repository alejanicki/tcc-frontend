import Button from "@/components/Button";
import Link from "next/link";
import "@fontsource/audiowide";

export default function Home() {
  return (
    <main className="bg-[url('../../public/img/bg-lp.png')] bg-cover w-screen h-screen">
      <div>
        <div className="min-w-screen min-h-screen grid grid-cols-2">
          <div className="flex-col mt-56 mx-28 text-center">
            <h1 className="text-9xl font-audiowide text-white mb-14">
              E-WASTE
            </h1>
            <p className=" text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              erat purus. Proin consequat tellus non neque mattis luctus.
              Pellentesque at purus in elit gravida ullamcorper. Curabitur non
              tristique lectus. Ut et ex id metus malesuada ullamcorper.
            </p>
          </div>
          <div className=" flex-col justify-center ml-48 my-auto text-5xl">
            <Link href={"/deposit"}>
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