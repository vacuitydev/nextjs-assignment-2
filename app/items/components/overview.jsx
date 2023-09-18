import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const ItemsOverview=({items})=>{
    return <div className=" w-full  bg-zinc-50 rounded-lg h-full m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 py-2">
    {items.map((item) => (
      <Link key={item.id} href={`/items/${item.slug}`}>
        <div className="card card-compact shadow-xl">
          <img
            src={`/assets/category/${item.slug}.jpg`}
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
      </Link>
    ))}
  </div>
}
export default ItemsOverview