import { useNavigate } from "react-router";
import PrimaryButton from "./PrimaryButton";
import { ROUTES } from "~/constans";

export default function TopBar() {

  let navigate = useNavigate();

  return (
    <div className="grid w-screen h-28" style={{ gridTemplateColumns: "1fr auto 1fr" }} >
      <div className="bg-tertiary" />
      <div className="grid grid-cols-2 w-screen shrink bg-primary max-w-[1650px]">
        <div className=" grid grid-rows-1 relative overflow-hidden">
          <div className="flex flex-row items-center lg:bg-tertiary">
            <img className="mx-[2.5vw] w-[380px] lg:block hidden" onClick={() => navigate("/")} src="/images/logo.png" alt="" />
            <img className="mx-[2.5vw] w-20 block lg:hidden"  onClick={() => navigate("/")}  src="/favicon.webp" alt="" />
          </div>
          <div className="bg-primary -top-40 right-12 w-2.5 h-96 absolute rotate-45" />
          <div className="bg-primary -top-40 -right-[120px] w-32 h-96 absolute rotate-45"/>
        </div>
        <div className="w-full lg:flex flex-row justify-end py-5 px-[2.5vw] hidden">
          <PrimaryButton text="En linea" px={130} onClick={() => navigate(ROUTES.BL_HOME)} />
        </div>
      </div>
      <div className="bg-primary" />
    </div>

  )
}