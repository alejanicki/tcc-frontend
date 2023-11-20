import Input from "@/components/input";

export default function Quantity() {
  return (
    <div>
      <h1 className="font-audiowide text-primary-500 text-xl text-center mb-28 md:text-4xl md:mb-56">
        Qual a quantidade de pilhas ?
      </h1>
      <div className="flex bg-lightGrey-500/50 rounded-md h-14 text-sm md:h-24 md:text-xl">
        <Input color="third"/>
        <p className="font-audiowide text-black/50 my-auto pr-2">Un.</p>
      </div>
    </div>
  );
}