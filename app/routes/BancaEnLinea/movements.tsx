import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovementTable from "~/components/BancaEnLinea/MovementTable";
import Pagination from "~/components/BancaEnLinea/Pagination";
import {
  movements,
  selectMovementLoading,
  selectMovementQuantity,
  selectRecentsMovements,
} from "~/redux/movement/movementSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";

export default function Movements() {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [multiplier, setMultiplier] = useState("0");
  const ITEMS_PER_PAGE = 30;

  const loading = useSelector((state: rootState) =>
    selectMovementLoading(state)
  );

  const totalMovements = useSelector((state: rootState) =>
    selectMovementQuantity(state)
  );

  const recentsMovements = useSelector((state: rootState) =>
    selectRecentsMovements(state)
  );

  const currentCount = recentsMovements?.length || 0;

  const fromRecord = currentCount === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const toRecord = currentCount === 0 ? 0 : fromRecord + currentCount - 1;

  useEffect(() => {
    dispatch(movements({ page: currentPage, multiplier }));
  }, [dispatch, currentPage, multiplier]);

  // 4. HANDLERS
  const handlerNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlerPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  console.log(totalMovements)

  return (
    <div className="flex flex-col w-full px-8 py-8 box-border">
      <div className="flex flex-row justify-between w-full">
        <strong>Movimientos</strong>
        <div className="flex flex-row gap-2">
          <p>tipo de movimiento:</p>
          <select
            name=""
            id=""
            className="bg-primary text-dirty-white w-32 rounded-sm px-1"
            value={multiplier}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setMultiplier(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="0">Todos</option>
            <option value="1">Credito</option>
            <option value="-1">Debito</option>
          </select>
        </div>
      </div>
      <MovementTable recentsMovements={recentsMovements} />
      <Pagination
        prevPage={handlerPrevPage}
        nextPage={handlerNextPage}
        fromQuantity={fromRecord}
        toQuantity={toRecord}
        quantity={totalMovements}
      />
    </div>
  );
}
