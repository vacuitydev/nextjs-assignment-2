import { BRAND_TITLE } from "../globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
  return (
    <div
      id="topbar"
      className="relative top-0 w-full z-[10] h-20 bg-palette-brand flex drop-shadow-md"
    >
      <div className="w-1/4 h-full bg-transparent flex items-center justify-start text-4xl text-palette-accent ">
        <FontAwesomeIcon icon={faBars} className="cursor-pointer select-none" />
      </div>
      <div className="w-1/2 h-full text-palette-brand-dull text-center flex items-center justify-center">
        <span className="inline-block align-middle text-5xl fancy">
          {BRAND_TITLE}
        </span>
      </div>
      <div className="w-1/4 h-full bg-transparent flex items-center justify-end px-2">
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <div className=" px-4 text-center py-3 rounded-full mr-1 text-palette-accent hover:bg-palette-darkest hover:bg-opacity-10 select-none cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </label>
            </div>
          </div>
        <div
          className="h-15 w-full rounded-full border p-2 
        border-palette-accent text-sm overflow-hidden whitespace-nowrap text-ellipsis text-palette-dark md:block hidden"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-inherit text-inherit focus-visible:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
