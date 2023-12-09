import Button from "@/components/button";

interface IPopup {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  content: string;
}

export default function Popup({ isOpen, setOpen, title, content }: IPopup) {
  if (isOpen) {
    return (
      <div className=" bg-lightGrey-500/95 flex flex-col absolute bottom-0 w-11/12 h-auto items-center rounded-xl justify-center left-auto right-auto ">
        <h1 className="mt-8 text-xl font-audiowide">{title}</h1>
        <div className="mt-8">
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="mt-12 mb-2 h-10 w-1/2">
          <Button color="primary" onClick={() => setOpen(!isOpen)}>
            Ok!
          </Button>
        </div>
      </div>
    );
  } else {
    return;
  }
}
