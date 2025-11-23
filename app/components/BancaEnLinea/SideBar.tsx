import { useNavigate } from "react-router";
import SideBarButton from "./SideBarButton";
import { ROUTES } from "~/constans";

interface SideBarProps {
  splat: string;
}

export default function SideBar({ splat }: SideBarProps) {
  const navigate = useNavigate();

  console.log(splat);

  return (
    <div className="bg-bg-green w-80 flex flex-col h-full">
      {Logo()}
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

  function Logo() {
    return (
      <div className="h-28 w-full flex justify-center items-center bg-tertiary relative overflow-hidden">
        <img className="w-64 mt-2.5 mr-2.5" src="/images/logo.png" alt="" />
        <div className="w-2.5 h-64 rotate-45 right-2 absolute bg-bg-green" />
        <div className="w-20 h-64 rotate-45 -right-[100px] absolute bg-bg-green" />
      </div>
    );
  }
}
