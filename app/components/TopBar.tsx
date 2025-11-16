export default function TopBar() {
  return (
    <div className="grid w-screen" style={{gridTemplateColumns: "1fr auto 1fr"}} >
      <div className=" bg-tertiary"/>
      <div className="grid grid-cols-2 w-full shrink bg-primary max-w-[1650px]">
        <div className="bg-tertiary">
          <img className="w-[400px]" src="/images/logo.png" alt="" />
        </div>
      </div>
      <div className="w-full h-full bg-primary"/>
    </div>

  )
}