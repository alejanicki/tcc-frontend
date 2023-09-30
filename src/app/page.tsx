import Button from "@/components/Button";
import Link from "next/link";
import "@fontsource/audiowide";

export default function Home() {
  return (
    <main className="bg-[url('../../public/img/bg-lp.png')] bg-cover w-screen h-screen">
      <div>
        <div className="min-w-full min-h-full grid-cols-2">
          <div className="flex-col">
            <h1>
              E-WASTE
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              erat purus. Proin consequat tellus non neque mattis luctus.
              Pellentesque at purus in elit gravida ullamcorper. Curabitur non
              tristique lectus. Ut et ex id metus malesuada ullamcorper.{" "}
            </p>
          </div>
          <div>
            <Link href={"/deposit"}>
              <Button color="primary">DEPOSITAR</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}