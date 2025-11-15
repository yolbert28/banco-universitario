interface SocialCardProps {
  logo: string;
  href: string;
  text: string;
}

export default function SocialCard({ logo, href, text }: SocialCardProps) {
  return (
    <div className="flex flex-col max-w-[660px]">
      <div className="flex flex-row items-center">
        <img className="w-12 h-12 m-5" src={logo} alt="" />
        <strong className="font-bold text-xl text-dirty-white">{text}</strong>
        <a style={{ marginLeft: "auto" }} href={href}>
          <img
            className="w-8 h-8 m-5"
            src="images/redirection_arrow.png"
            alt=""
          />
        </a>
      </div>
      <div className="h-1 w-full bg-bg-light-blue" />
    </div>
  );
}
