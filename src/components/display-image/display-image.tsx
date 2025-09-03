import tarshIcon from "../../assets/icon-trash-bin.svg";
import editIcon from "../../assets/icon-edit.svg";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../pages/create-flashcard/create-flashcard-slice";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function DisplayImage({
  src,
  index,
  handleEdit,
}: {
  src: string;
  index: number;
  handleEdit: () => void;
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCard(index));
  };
  return (
    <div className="flex flex-row gap-2 mt-[1.7rem]">
      <img src={src} className="w-16 h-16" />
      <div className="flex flex-col gap-2">
        <img className="w-6 h-6" onClick={handleDelete} src={tarshIcon} />
        <img
          className="w-6 h-6"
          onClick={() => {
            handleEdit();
          }}
          src={editIcon}
        />
      </div>
    </div>
  );
}
