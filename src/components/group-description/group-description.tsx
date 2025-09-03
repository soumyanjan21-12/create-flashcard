export default function GroupDescription() {
  return (
    <div className="bg-white text-black py-6 px-8 rounded-sm mt-3 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span>
          Create Group<sup>*</sup>
        </span>
        <input
          className="border-2 rounded-sm px-2 py-1 w-1/2"
          type="text"
        ></input>
      </div>
      <div className="flex flex-col gap-1">
        <span>
          Add Description<sup>*</sup>
        </span>
        <textarea className="border-2 rounded-sm px-2 py-1 w-2/3"></textarea>
      </div>
    </div>
  );
}
