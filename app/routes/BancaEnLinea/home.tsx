import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { initPage, setMultiplier } from "~/api/LocalStorage";
import LoadingSpinner from "~/components/BancaEnLinea/LoadingSpinner";
import MovementTable from "~/components/BancaEnLinea/MovementTable";
import { ROUTES } from "~/constans";
import {
  movements,
  selectRecentsMovements,
} from "~/redux/movement/movementSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import {
  balance,
  selectBalanceValues,
  selectUserLoading,
  selectUserValue,
  whoAmI,
} from "~/redux/user/userSlice";

export default function BancaHome() {
  const navigate = useNavigate();

  const [reload, setReload] = useState(false);
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: rootState) => selectUserLoading(state));
  const recentsMovements = useSelector((state: rootState) =>
    selectRecentsMovements(state)
  );
  const user = useSelector((state: rootState) => selectUserValue(state));
  const balanceValues = useSelector((state: rootState) =>
    selectBalanceValues(state)
  );

  useEffect(() => {
    initPage();
    setMultiplier("0");
    dispatch(whoAmI());
    dispatch(balance());
    dispatch(movements());
  }, [reload]);

  const handlerClickShowAccountNumber = () => {
    setShowAccountNumber(!showAccountNumber);
  };

  return (
    <div className="flex flex-col items-center px-16 py-8">
      {loading && <LoadingSpinner />}
      <>
        <div className="flex flex-row w-full gap-8">
          <div
            className="flex flex-col p-6 gap-6 min-w-[380px] h-40 bg-light-blue rounded-2xl "
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="flex flex-row w-full justify-between items-center">
              <h3 className=" text-xl">Saldo de cuenta</h3>
              <button
                onClick={() => {
                  setReload(!reload);
                }}
              >
                <img className="h-7 w-7" src="/images/reload.png" alt="" />
              </button>
            </div>
            <strong className=" text-3xl ml-1">
              Bs. {balanceValues?.data.balance},00
            </strong>
          </div>
          <div
            className="flex flex-col p-6 w-full h-40 bg-primary rounded-2xl gap-6"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <h3 className="text-dirty-white text-xl">Número de cuenta</h3>
            <div className="flex flex-row w-full pr-6 justify-between items-center">
              <strong className="text-dirty-white text-2xl ml-1">
                {showAccountNumber
                  ? user?.accountNumber
                  : "***************************"}
              </strong>
              <button onClick={handlerClickShowAccountNumber}>
                <img
                  className="h-8 w-8"
                  src={
                    showAccountNumber ? "/images/hide.png" : "/images/show.png"
                  }
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full gap-8 pt-8">
          <strong>Actividad reciente de cuenta</strong>
          <button
            className="bg-primary text-dirty-white rounded-sm py-1 px-4"
            onClick={() => navigate(ROUTES.BL_MOVEMENTS)}
          >
            <strong>Ver Actividad</strong>
          </button>
        </div>
        <MovementTable
          recentsMovements={
            recentsMovements == null ? null : recentsMovements.slice(0, 3)
          }
        />
      </>
    </div>
  );
}
