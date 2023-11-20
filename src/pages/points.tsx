import "@fontsource/audiowide";
import Item from "../components/points/item";
import Menu from "@/components/menu";
import { Private } from "@/components/private";

export default function Points() {
  return (
    <Private>
      <main className="bg-darkGrey-500 h-full w-screen xl:grid xl:grid-cols-3">
        <Menu />
        <div className="py-4 xl:col-span-2">
          <div className="bg-white h-screen w-4/5 mx-auto rounded-xl pt-6 overflow-x-auto">
            <div className="w-full text-center text-primary-500 text-xl font-audiowid">
              <h1>Escolha o seu item</h1>
            </div>
            <div className="mt-6 h-full">
              <ul>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
                <li className="mb-4">
                  <Item />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Private>
  );
}
