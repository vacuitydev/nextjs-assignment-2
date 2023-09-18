import { PrismaClient } from "@prisma/client";
import { type item } from "@prisma/client";
import ItemsOverview from "./components/overview";

const prisma = new PrismaClient();
const getItems = async()=>{
    return await prisma.item.findMany({select:{
        long_description:false
    }})
}
export default async function Items({items}:{
    items: item[] | undefined
}){
    let _items = []
    if(!items){
        _items = await getItems();
    }
    else{
        _items = items
    }
    return <>
        <ItemsOverview items={items}/>
    </>
}