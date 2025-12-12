import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPage,
  initPage,
  nextPage,
  prevPage,
  setMultiplier,
} from "~/api/LocalStorage";
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
  const [currentPage, setCurrentPage] = useState(getPage());


  const loading = useSelector((state: rootState) =>
    selectMovementLoading(state)
  );

  const pageSize = useSelector((state: rootState) =>
    selectMovementQuantity(state)
  );

  const recentsMovements = useSelector((state: rootState) =>
    selectRecentsMovements(state)
  );

  const currentCount = recentsMovements?.length || 0;

  const calculatedFrom =
    currentCount === 0
      ? 0
      : pageSize < 30
        ? (currentPage - 2) * 30 + 1 + pageSize
        : (currentPage - 1) * pageSize + 1;

  const calculatedTo =
    currentCount === 0
      ? 0
      : pageSize < 30
        ? calculatedFrom + currentCount + pageSize
        : calculatedFrom + currentCount - 1;

  useEffect(() => {
    dispatch(movements());
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      initPage();
      setMultiplier("0");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      initPage();
      setMultiplier("0");
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // 4. HANDLERS
  const handlerNextPage = () => {
    // Evitar doble click o avanzar si está cargando
    if (loading) return;

    nextPage(); // Actualiza LocalStorage
    setCurrentPage(getPage()); // Actualiza estado React para recalcular 'calculatedFrom'
    dispatch(movements()); // Pide nuevos datos
  };

  const handlerPrevPage = () => {
    if (loading || currentPage === 1) return;

    prevPage();
    setCurrentPage(getPage());
    dispatch(movements());
  };

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
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setMultiplier(e.target.value);
              initPage();
              setCurrentPage(getPage());
              dispatch(movements());
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
        fromQuantity={calculatedFrom}
        toQuantity={calculatedTo}
        quantity={pageSize}
      />
    </div>
  );
}
