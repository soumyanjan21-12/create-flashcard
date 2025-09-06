import AddCards from "../../components/add-cards";
import GroupDescription from "../../components/group-description";
import { useSelector } from "react-redux";
import type { FlashCards } from "./create-flashcard-slice";

export default function CreateFlashcard() {
  const myCards = useSelector(
    (state: { crateFlashCards: FlashCards }) => state.crateFlashCards
  );

  const handleSubmit = () => {
    const cards = JSON.parse(
      localStorage.getItem("myCards") || JSON.stringify([])
    );
    localStorage.setItem("myCards", JSON.stringify([...cards, myCards]));
  };

  return (
    <div className="flex justify-content-center flex-col">
      <GroupDescription />
      <AddCards />
      <button
        className="bg-teal-500 text-white rounded-sm mt-4 
        py-2 px-4 w-25 self-center"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
}
