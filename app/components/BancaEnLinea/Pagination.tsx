export default function Pagination() {
  return (
    <div className="flex flex-row justify-between items-center w-52">
      <button className="h-10 w-10 bg-disable-grey p-1 rounded-md">
        <img src="/images/left_arrow_grey.png" alt="" />
      </button>
      <div className="text-primary font-bold text-xl">1 - 50</div>
      <button className="h-10 w-10 bg-accent p-1 rounded-md">
        <img className="rotate-180" src="/images/left_arrow_green.png" alt="" />
      </button>
    </div>
  );
}
