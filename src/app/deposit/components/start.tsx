import Button from "@/components/buton";

export default function Start() {
  return (
    <Button type="submit" color="fourth">
      <div className="flex w-full justify-between text-2xl px-2">
        <h1>Iniciar</h1>
        <h1>➜</h1>
      </div>
    </Button>
  );
}
