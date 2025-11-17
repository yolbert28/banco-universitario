interface SocialCardProps {
  logo: string;
  href: string;
  text: string;
}

export default function SocialCard({ logo, href, text }: SocialCardProps) {
  return (
    <div className="flex flex-col xl:max-w-[660px]">
      <div className="grid items-center" style={{gridTemplateColumns: "60px auto 60px"}}>
        <img className="lg:w-12 lg:h-12 justify-self-center w-10 h-10 m-5" src={logo} alt="" />
        <strong className="font-bold text-lg md:text-xl lg:text-xl xl:text-xl wrap-break-word leading-tight text-dirty-white">{text}</strong>
        <a style={{ marginLeft: "auto", marginRight: 20}} href={href}>
          <img
            className="lg:w-8 lg:h-8 w-6 h-6 m-5"
            src="images/redirection_arrow.png"
            alt=""
          />
        </a>
      </div>
      <div className="h-1 w-full bg-bg-light-blue" />
    </div>
  );
}
