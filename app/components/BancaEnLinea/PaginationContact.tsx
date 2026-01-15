interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  fromQuantity: number;
  toQuantity: number;
  quantity: number;
}

export default function Pagination({nextPage, prevPage, fromQuantity, toQuantity, quantity}: PaginationProps) {
  const leftBackground = (fromQuantity <= 1) ? "bg-disable-grey" : "bg-accent"
  const rightBackground = (quantity < 5) ? "bg-disable-grey" : "bg-accent"
  const leftImage = (fromQuantity <= 1) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"
  const rightImage = (quantity < 5) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"

  return (
    <div className="flex justify-end mt-2 pb-2 mx-4">
      <div className="flex flex-row justify-between  w-45">
        <button className={`h-8 w-8 ${leftBackground} mx-auto p-1 rounded-md`}
        disabled = {fromQuantity <= 1}
        onClick={prevPage}>
          <img src={leftImage} alt="prev" />
        </button>
        <div className=" mx-auto text-primary font-bold text-xl">{fromQuantity} - {toQuantity}</div>
        <button className={`h-8 w-8 ${rightBackground} mx-auto p-1 rounded-md`}
        disabled = {quantity < 5}
        onClick={()=>{nextPage(); console.log("next")}}>
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