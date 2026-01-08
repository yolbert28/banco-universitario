import { Children } from "react";

export default function DarkInteractionLayout(
  {onClose, children, showBg = true}: {onClose?: () => void, children: React.ReactNode, showBg?: boolean}
){
  const background = showBg ? "backdrop-blur-xs bg-black/80" : ""
  return <div className={`w-full h-full z-50 absolute flex justify-center items-center ${background}`} onClick={(e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  }}>
    {children}
  </div>
}
