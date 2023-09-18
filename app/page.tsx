import Hero from "./components/Hero";
import { PrismaClient } from "@prisma/client";
import ItemsOverview from "./items/components/overview";
import errorImage from "/error.png"
const mainDrawerId = "main-drawer";
const prisma = new PrismaClient();
let items = [];
const initItems = async () => {
  items = await prisma.item.findMany({
    select:{
      long_description:false
    }
  });
};

export default async function Home() {
  await initItems();
  console.log("Items", items);
  return (
    <main>
      <div className="w-full h-8" />
      <p className="text-5xl font-bold fancy md:pl-36 pl-2">New items</p>
      <Hero />
      <div className="divider w-10/12 mx-auto" />
      <div className="min-h-96 mb-20 md:w-3/4 mx-auto w-11/12">
        <ItemsOverview items={items}/>
      </div>
    </main>
  );
}
