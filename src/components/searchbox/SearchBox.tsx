import { useRef } from "react";

type SearchButtonProps = {
  searchLabel: string;
  buttonLabel: string;
  handleClick(inputText: string): React.MouseEventHandler<HTMLButtonElement>;
};

export default function SearchBox({
  searchLabel,
  buttonLabel,
  handleClick,
}: SearchButtonProps) {
  // * Event Handlers
  const handleSearchInputText = () => {
    const inputText = searchBoxTextRef.current.value;
    handleClick(inputText);
    searchBoxTextRef.current.value = "";
  };
  const searchBoxTextRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement | null>();
  return (
    <div className="flex justify-evenly items-center self-end gap-4">
      <input
        type="text"
        ref={searchBoxTextRef}
        placeholder={searchLabel}
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-outline" onClick={handleSearchInputText}>
        {buttonLabel}
      </button>
    </div>
  );
}
