import { useNavigate, type NavigateFunction } from "react-router";
import SideBarButton from "./SideBarButton";
import { ROUTES } from "~/constans";

interface SideBarProps {
  splat: string;
}

export default function SideBar({ splat }: SideBarProps) {
  const navigate = useNavigate();

  console.log(splat);

  return (
    <div className="bg-bg-green w-64 flex flex-col h-full">
      {Logo(navigate)}
      <SideBarButton
        text="Inicio"
        selected={splat === ""}
        onClick={() => navigate(ROUTES.BL_HOME)}
      />
      <SideBarButton
        text="Movimientos"
        selected={splat != "" && ROUTES.BL_MOVEMENTS.endsWith(splat)}
        onClick={() => navigate(ROUTES.BL_MOVEMENTS)}
      />
      <SideBarButton
        text="Transferencias"
        selected={splat != "" && ROUTES.BL_TRANSFERS.endsWith(splat)}
        onClick={() => navigate(ROUTES.BL_TRANSFERS)}
      />
      <SideBarButton
        text="Contactos"
        selected={splat != "" && ROUTES.BL_CONTACTS.endsWith(splat)}
        onClick={() => navigate(ROUTES.BL_CONTACTS)}
      />
      <SideBarButton
        text="Datos personales"
        selected={splat != "" && ROUTES.BL_PERSONAL_DATA.endsWith(splat)}
        onClick={() => navigate(ROUTES.BL_PERSONAL_DATA)}
      />
    </div>
  );

  function Logo(navigate: NavigateFunction) {
    return (
      <div className="h-20 w-full flex justify-center items-center bg-tertiary relative overflow-hidden"
      onClick={() => navigate(ROUTES.BL_HOME)}>
        <img className="w-52 mt-2.5 mr-2.5 z-50" src="/images/logo.png" alt="" />
        <div className="w-2.5 h-64 rotate-45 right-0 absolute bg-bg-green" />
        <div className="w-20 h-64 rotate-45 -right-[108px] absolute bg-bg-green" />
      </div>
    );
  }
}
