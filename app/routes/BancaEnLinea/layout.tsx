import { Route, Routes, useNavigate } from "react-router";
import BancaHome from "./home";
import type { Route as RouteType } from "./+types/layout";
import SideBar from "~/components/BancaEnLinea/SideBar";
import { ROUTES } from "~/constans";
import Movements from "./movements";
import Transfers from "./transfers";
import Contacts from "./contacts";
import PersonalData from "./personalData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import {
  clearError,
  logout,
  selectIsLogged,
  selectUserErrorMessage,
  selectUserLoading,
  selectUserValue,
  whoAmI,
} from "~/redux/user/userSlice";

interface LayoutBancaEnLineaProps {
  params: RouteType.LoaderArgs;
}

export default function LayoutBancaEnLinea({
  params,
}: LayoutBancaEnLineaProps) {
  const navigate = useNavigate();

  const { "*": splat } = params;

  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: rootState) => selectUserLoading(state));
  const errorMessage = useSelector((state: rootState) =>
    selectUserErrorMessage(state)
  );
  const user = useSelector((state: rootState) => selectUserValue(state));
      const isLogged = useSelector((state: rootState) => selectIsLogged(state));

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
    dispatch(clearError());
  }, [isLogged, navigate, dispatch]);

  useEffect(() => {
    dispatch(whoAmI());
    console.log(whoAmI);
  }, []);

  return (
    <main className="w-screen flex justify-center items-center bg-dirty-white">
      <section
        className="grid w-screen max-w-[1650px]"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        <SideBar splat={splat} />
        <div
          className="grid w-full h-full"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <div className="h-20 w-full flex justify-center items-center sticky top-0 bg-dirty-white z-50">
            <div className="h-full w-[90%] flex flex-row justify-between items-center ">
              <h2 className="font-bold ml-5">
                Bienvenido, {user?.name} {user?.lastName}!
              </h2>
              <img
                className="h-8"
                src="/images/exit_logo.png"
                alt=""
                onClick={() => dispatch(logout())}
              />
            </div>
            <div className="h-px w-[93%] bg-bg-green absolute bottom-0" />
          </div>
          <Routes>
            <Route index element={<BancaHome />} />
            <Route
              path={ROUTES.BL_MOVEMENTS.slice(16)}
              element={<Movements />}
            />
            <Route
              path={ROUTES.BL_TRANSFERS.slice(16)}
              element={<Transfers />}
            />
            <Route path={ROUTES.BL_CONTACTS.slice(16)} element={<Contacts />} />
            <Route
              path={ROUTES.BL_PERSONAL_DATA.slice(16)}
              element={<PersonalData />}
            />
          </Routes>
        </div>
      </section>
    </main>
  );
}
