interface SideBarButtonProps {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function SideBarButton({ text, selected, onClick }: SideBarButtonProps) {

  const isSelected = selected ? "bg-secondary text-bg-green" : "hover:bg-sideBar-button-hover text-light-blue"

  return (
    <div className={`h-16 w-full flex flex-col ${isSelected} justify-center items-center font-bold relative`}
    onClick={onClick}>
      {text}
      <div className="w-full h-0.5 bg-tertiary absolute bottom-0" />
    </div>
  );
}
