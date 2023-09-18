import { type item } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import ItemsOverview from "../../items/components/overview";
const prisma = new PrismaClient();
const searchForTerm = async (term): Promise<item[]> => {
  const searchResults = await prisma.item.findMany({
    where: {
      name: {
        contains: term,
        mode: "insensitive",
      },
    },
  });
  await new Promise(resolve=>setTimeout(resolve, 3000))
  if (!searchResults) {
    return [];
  }
  return searchResults;
};
export default async function SearchTermPage({
  params,
}: {
  params: {
    term: string;
  };
}) {
  const searchTerm = decodeURI(params.term);
  let results = await searchForTerm(searchTerm);
// // To test what happens with longer results
//   results = results.concat(results).concat(results).concat(results)
//   results = results.concat(results).concat(results).concat(results)
//   results = results.concat(results).concat(results).concat(results)
  return (
    <div className="min-h-16 px-4">
      <div className="w-full text-3xl font-light px-8">
        Results for <span className="text-palette-brand font-extrabold">{searchTerm}</span>
      </div>
      <div className="w-full mt-4">
        {searchTerm.length>0 ? <ItemsOverview items={results}/> : "No results found"}
      </div>
    </div>
  );
}
