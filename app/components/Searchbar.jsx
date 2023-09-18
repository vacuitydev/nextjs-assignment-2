"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
const searchNameId= "search-text"
export default function Searchbar(){
    const router = useRouter();
    const submitSearch = (e)=>{
        e.preventDefault();
        const name = e.target.elements[searchNameId].value;
        if(name===""){
            return
        }
        router.push(`/search/${name}`)
    }
    return <form onSubmit= {submitSearch}
          className="h-15 w-full rounded-full border p-2 
        border-palette-accent text-sm overflow-hidden whitespace-nowrap text-ellipsis text-palette-dark flex"
        >
            <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2"  />

            </button>
          <input
            type="text"
            id={searchNameId}
            placeholder="Search for something"
            className="bg-inherit grow text-inherit focus-visible:outline-none"
          />
        </form>
}