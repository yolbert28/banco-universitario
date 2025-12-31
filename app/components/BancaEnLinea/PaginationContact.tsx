interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  fromQuantity: number;
  toQuantity: number;
  quantity: number;
}

export default function Pagination({nextPage, prevPage, fromQuantity, toQuantity, quantity}: PaginationProps) {
  const leftBackground = (fromQuantity === 1) ? "bg-disable-grey" : "bg-accent"
  const rightBackground = (toQuantity >= quantity) ? "bg-disable-grey" : "bg-accent"
  const leftImage = (fromQuantity === 1) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"
  const rightImage = (toQuantity >= quantity) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"

  return (
    <div className="flex justify-end my-4 mx-9 mx-auto">
      <div className="flex flex-row justify-between  w-45">
        <button className={`h-8 w-8 ${leftBackground} mx-auto p-1 rounded-md`}
        disabled = {fromQuantity <= 1}
        onClick={prevPage}>
          <img src={leftImage} alt="prev" />
        </button>
        <div className=" mx-auto text-primary font-bold text-xl">{fromQuantity} - {toQuantity}</div>
        <button className={`h-8 w-8 ${rightBackground} mx-auto p-1 rounded-md`}
        disabled = {toQuantity >= quantity}
        onClick={nextPage}>
          <img
            className="rotate-180"
            src={rightImage}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}