import { PrismaClient } from "@prisma/client";
import { type item } from "@prisma/client";
import ItemsOverview from "./components/overview";
import { GetStaticProps } from "next";

const prisma = new PrismaClient();
// export const  getStaticProps: GetStaticProps = async ()=>{
//     const items = await getItems();
//     return {props:{
//         items
//     }}
// }
const getItems = async()=>{
    return await prisma.item.findMany({select:{
        id:true,
        name: true,
        slug: true,
        description: true,
        long_description:false
    }})
}
export default async function Items(){
        const items = await getItems();
    return <>
        <ItemsOverview items={items}/>
    </>
}