import ObjetivoCard from "./ObjetivoCard";

interface ObjetivoItem {
  description: string;
}

interface ObjetivoProps {
  title: string;
  objectives: ObjetivoItem[];
}

export default function Objetivo({data}: {data: ObjetivoProps}) {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-primary relative pb-4 md:pt-10 md:pb-16">
      <div
        className="absolute -top-[6.5vw] sm:-top-[4.5vw] xl:-top-20 w-screen grid items-center h-8 lg:h-16 xl:h-20"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="h-full w-full bg-primary" />
        <img
          className="h-full justify-self-center"
          src="/images/decorador_verde_grande.webp"
          alt=""
        />
        <div className="h-full w-full" />
      </div>

      <div className="w-full flex flex-col justify-center items-center max-w-7xl z-10">
        <div className="flex flex-col lg:flex-col items-center gap-6 lg:gap-16 py-12 md:py-16 w-[95%]">
          <h3 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bg-light-blue">
            {data.title}
          </h3>
          <div className="flex flex-col gap-6 lg:gap-16 min-[1100px]:flex-row justify-between  items-center w-full">
            <ObjetivoCard direction="left">
              {data.objectives[0].description}
            </ObjetivoCard>
            <ObjetivoCard direction="right">
              {data.objectives[1].description}
            </ObjetivoCard>
          </div>

          <ObjetivoCard>
              {data.objectives[2].description}
          </ObjetivoCard>
          <div className="flex flex-col gap-6 lg:gap-16 min-[1100px]:flex-row justify-between items-center w-full">
            <ObjetivoCard direction="left">
              {data.objectives[3].description}
            </ObjetivoCard>
            <ObjetivoCard direction="right">
              {data.objectives[4].description}
            </ObjetivoCard>
          </div>
          <ObjetivoCard>
              {data.objectives[5].description}
          </ObjetivoCard>
        </div>
      </div>
    </div>
  );
}
