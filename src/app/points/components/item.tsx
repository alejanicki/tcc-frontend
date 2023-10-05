export default function Item() {
  return (
    <div className="bg-darkGrey-500 h-full w-11/12 mx-auto rounded-xl">
      <div className="grid grid-cols-3 p-2">
        <div className=" col-span-2 mr-4">
          <h2 className=" font-audiowide text-primary-500 text-2xl text-center">Item</h2>
          <p className="text-sm text-justify mt-2"> Lorem ipsum dolor sit amet.</p>
          <div className="flex justify-between text-sm my-2">
            <p> Valor: </p>
            <p>2 pts.</p>
          </div>
        </div>
        <div className="h-full w-full bg-primary-500 rounded-lg">
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}
