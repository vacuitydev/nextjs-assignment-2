export default function Hero() {
  return (
    <div className="carousel carousel-center  rounded-md w-full transform md:mx-[12.5%] md:w-3/4 md:h-[600px] h-[400px]">
      {Array.from(Array(4).keys()).map((i) => (
        <div
          id={`item${i + 1}`}
          className="carousel-item w-full relative flex flex-col justify-end"
          key={i}
          style={{
            backgroundImage: `url(/assets/hero/${i + 1}.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#item${i > 0 ? i : 4}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#item${i < 3 ? i + 2 : 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="backdrop-blur-3xl	md:py-2 px-2 md:px-8">
            <p className="text-5xl font-bold text-palette-brand">Item {i+1} title</p>
            <p className="text-3xl font-light text-palette-brand">Item {i+1} sub-title</p>
            <p className="text-xl text-zinc-50">Item {i+1} description</p>
          </div>
        </div>
      ))}
    </div>
  );
}
