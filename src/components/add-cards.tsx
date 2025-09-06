import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import {
  addCard,
  type FlashCards,
} from "../pages/create-flashcard/create-flashcard-slice";

export default function AddCards() {
  const { cards } = useSelector(
    (state: { crateFlashCards: FlashCards }) => state.crateFlashCards
  );
  const dispatch = useDispatch();
  const handleAddMore = () => {
    dispatch(addCard());
  };
  return (
    <div className="bg-white text-black py-6 px-8 rounded-sm mt-3 flex flex-col gap-2 justify-content-start">
      {cards.map((card, index) => (
        <Card card={card} index={index} key={index} />
      ))}
      <button
        className="w-[12rem] text-blue-600 font-semibold"
        onClick={handleAddMore}
      >
        + Add More
      </button>
    </div>
  );
}
