import AddCards from "../../components/add-cards/add-cards";
import GroupDescription from "../../components/group-description/group-description";
import { useSelector } from "react-redux";
import type { FlashCards } from "./create-flashcard-slice";

export default function CreateFlashcard() {
  const myCards = useSelector(
    (state: { crateFlashCards: FlashCards }) => state.crateFlashCards
  );

  const handleSubmit = () => {
    console.log(myCards);
  };

  return (
    <div className="flex justify-content-center flex-col">
        <GroupDescription />
        <AddCards />
        <button
          className="bg-teal-500 text-white rounded-sm mt-4 py-2 px-4 w-25 self-center"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
  );
}
