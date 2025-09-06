import { useRef } from "react";
import DisplayImage from "./display-image";
import { useDispatch } from "react-redux";
import { editCard } from "../pages/create-flashcard/create-flashcard-slice";

export default function Card({
  card,
  index,
}: {
  card: {
    term: string;
    defination: string;
    image?: string;
  };
  index: number;
}) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    (fileInputRef.current! as HTMLInputElement).click(); 
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      editCard({
        index: index,
        field: "term",
        value: e.target.value,
      })
    );
  };

  const handleDefinationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(
      editCard({
        index: index,
        field: "defination",
        value: e.target.value,
      })
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = URL.createObjectURL(
      event?.target?.files ? event?.target?.files[0] : new Blob()
    );
    dispatch(
      editCard({
        index: index,
        field: "image",
        value: file,
      })
    );
  };

  return (
    <div className="flex flex-row gap-2 items-start">
      <div className="rounded-full bg-teal-200 text-black w-10 h-10 flex justify-center items-center">
        {index + 1}
      </div>
      <div className="flex flex-col gap-1">
        <span>
          Enter term<sup>*</sup>
        </span>
        <input
          className="border-2 rounded-sm px-2 py-1"
          value={card.term}
          type="text"
          onChange={handleTermChange}
        ></input>
      </div>
      <div className="flex flex-col gap-1">
        <span>
          Enter Defination<sup>*</sup>
        </span>
        <textarea
          className="border-2 rounded-sm px-2 py-1"
          value={card.defination}
          onChange={handleDefinationChange}
        ></textarea>
      </div>
      <input
        type="file"
        accept="image/svg+xml, image/jpeg"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {card.image && (
        <DisplayImage
          src={card.image}
          index={index}
          handleEdit={handleButtonClick}
        />
      )}
      {!card.image && (
        <button
          className="px-4 py-2 border-2 rounded-sm mt-[1.7rem]"
          onClick={handleButtonClick}
        >
          Select Image
        </button>
      )}
    </div>
  );
}
