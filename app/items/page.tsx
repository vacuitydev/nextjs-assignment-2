import ItemsOverview from "./components/overview";

import prisma from "../../api/prisma";
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