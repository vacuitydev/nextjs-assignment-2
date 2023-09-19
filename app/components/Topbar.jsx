import { BRAND_TITLE } from "../globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar"
export default function Topbar() {
  return (
    <div
      id="topbar"
      className="relative top-0 w-full z-[10] h-full bg-palette-brand flex drop-shadow-md"
    >
      <div className="w-1/4 h-full bg-transparent flex items-center justify-start text-4xl text-palette-accent ">
        <FontAwesomeIcon icon={faBars} className="cursor-pointer select-none" />
      </div>
      <div className="w-1/2 h-full text-palette-brand-dull text-center flex items-center justify-center">
        <a href="/">

        <span className="inline-block align-middle text-5xl fancy">
          {BRAND_TITLE}
        </span>
        </a>
      </div>
      <div className="w-1/4 h-full bg-transparent flex items-center justify-end px-2">
        
        <Searchbar/>
      </div>
    </div>
  );
}
