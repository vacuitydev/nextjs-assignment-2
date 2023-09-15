import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
const mainDrawerId = "main-drawer";
const items = [
  {
    _id: 1,
    name: "Breads",
    description: "Delight in Our Freshly Baked Artisanal Breads!",
    image: "assets/category/category1.jpg",
    cost: "30"
  },
  {
    _id: 2,
    name: "Muffins & Cookies",
    description: "The softest",
    image: "assets/category/muffin.jpg",
    cost: "40"
  },
  {
    _id: 3,
    name: "Sweet things",
    description: "The sweetest of them all",
    image: "assets/category/category3.jpg",
    cost: "50"
  },
  {
    _id: 4,
    name: "Donuts",
    description: "The specialest donuts",
    image: "assets/category/category4.jpg",
    cost: "60"
  },
];
export default function Home() {
  return (
    <main>
        <div className="w-full h-8" />
          <p className="text-5xl font-bold fancy md:pl-36 pl-2">New items</p>
          <Hero />
          <div className="divider w-10/12 mx-auto" />
          <div className="min-h-96 w-full mb-20">
            <div className="md:w-3/4 w-11/12 bg-zinc-50 rounded-lg h-full m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 py-2">
              {items.map((item) => (
                <div key={item.name} className="card card-compact shadow-xl">
                  <img
                    src={item.image}
                    alt={"Picture of " + item.name}
                    className="object-cover h-40"
                  />
                  <div className="card-body">
                    <h2 className="card-title fancy text-palette-accent">
                      {item.name}
                    </h2>
                    <p className="text-palette-dark h-[2rem] overflow-ellipsis">
                      {item.description}
                    </p>
                    <div className="card-actions justify-end flex">
                      <button className="btn btn-circle btn-outline text-palette-accent hover:bg-palette-accent hover:text-palette-brand">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

    </main>
  )
}
