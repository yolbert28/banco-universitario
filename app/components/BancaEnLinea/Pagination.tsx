interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  fromQuantity: number;
  toQuantity: number;
  quantity: number;
}

export default function Pagination({nextPage, prevPage, fromQuantity, toQuantity, quantity}: PaginationProps) {
  const leftBackground = (fromQuantity === 1) ? "bg-disable-grey" : "bg-accent"
  const rightBackground = (quantity != 30) ? "bg-disable-grey" : "bg-accent"
  const leftImage = (fromQuantity === 1) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"
  const rightImage = (quantity != 30) ? "/images/left_arrow_grey.png" : "/images/left_arrow_green.png"



  return (
    <div className="flex justify-end my-4 mx-12">
      <div className="flex flex-row justify-between items-center w-52">
        <button className={`h-10 w-10 ${leftBackground} p-1 rounded-md`}
        disabled = {fromQuantity <= 1}
        onClick={prevPage}>
          <img src={leftImage} alt="" />
        </button>
        <div className="text-primary font-bold text-xl">{fromQuantity} - {toQuantity}</div>
        <button className={`h-10 w-10 ${rightBackground} p-1 rounded-md`}
        disabled = {quantity != 30}
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
