import { useRef } from "react";
import DisplayImage from "../display-image/display-image";

export default function AddCards() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    (fileInputRef.current! as HTMLInputElement).click(); // Programmatically click the hidden file input
  };

  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = URL.createObjectURL(event?.target?.files ? event?.target?.files[0]: new Blob());
    console.log("Selected file:", file)
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="bg-white text-black py-6 px-8 rounded-sm mt-3 flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-start">
        <div className="rounded-full bg-teal-200 text-black w-10 h-10 flex justify-center items-center">
          {" "}
          1{" "}
        </div>
        <div className="flex flex-col gap-1">
          <span>
            Enter term<sup>*</sup>
          </span>
          <input className="border-2 rounded-sm px-2 py-1" type="text"></input>
        </div>
        <div className="flex flex-col gap-1">
          <span>
            Enter Defination<sup>*</sup>
          </span>
          <textarea className="border-2 rounded-sm px-2 py-1"></textarea>
        </div>
        <input
          type="file"
          accept="image/svg+xml, image/jpeg"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        {/* <button
          onClick={handleButtonClick}
          className="bg-white border-2 p-2 rounded-sm mt-[1.75rem]"
        >
          Select Image
        </button> */}
        <DisplayImage src="https://www.shutterstock.com/shutterstock/photos/531786517/display_1500/stock-photo-winter-forest-nature-background-531786517.jpg"/>
      </div>
    </div>
  );
}
