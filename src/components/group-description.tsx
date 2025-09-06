import { useDispatch, useSelector } from "react-redux";
import {
  ChangeDescription,
  ChangeGroupName,
  type FlashCards,
} from "../pages/create-flashcard/create-flashcard-slice";

export default function GroupDescription() {
  const { groupName, description } = useSelector(
    (state: { crateFlashCards: FlashCards }) => state.crateFlashCards
  );
  const dispatch = useDispatch();
  const handeGroupNameChange = (name: string) => {
    console.log(groupName, description);
    dispatch(ChangeGroupName(name));
  };
  const handleDescriptionChange = (description: string) => {
    dispatch(ChangeDescription(description));
  };
  return (
    <div className="bg-white text-black py-6 px-8 rounded-sm mt-3 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span>
          Create Group<sup>*</sup>
        </span>
        <input
          className="border-2 rounded-sm px-2 py-1 w-1/2"
          type="text"
          value={groupName}
          onChange={(e) => {
            handeGroupNameChange(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-col gap-1">
        <span>
          Add Description<sup>*</sup>
        </span>
        <textarea
          className="border-2 rounded-sm px-2 py-1 w-2/3"
          value={description}
          onChange={(e) => {
            handleDescriptionChange(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}
