import Searchbar from "../components/Searchbar";

export default function SearchPage(){
    return <div className="flex flex-col items-center justify-center py-12">
        <div className="text-6xl text-palette-brand">
            Search for your next delight
        </div>

        <div className="mt-12 w-3/4">
            <Searchbar/>
        </div>
    </div>
}