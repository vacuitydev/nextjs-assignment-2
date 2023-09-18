import {PrismaClient, type item } from "@prisma/client";
import {notFound} from "next/navigation"
import ReactMarkdown from "react-markdown";
const prisma = new PrismaClient();
const fetchItemBySlug= async (slug: string):Promise<item> =>{
    const foundItem = await prisma.item.findUnique({
        where:{
            slug: slug
        }
      
    })
    if(!foundItem){
        notFound();
    }
    return foundItem;
}
export async function getServerSideProps(){
    const slugs = await prisma.item.findMany({
        select:{
            slug:true
        }
    })
    return slugs
}
export default async function ItemPage({params}:{params:{slug:string}}){
    
    const slug = params.slug;
    const item = await fetchItemBySlug(slug);
    // To get the loading screen in its full glory
    await new Promise(resolve=>setTimeout(resolve, 3000))
    return <div className="w-full p-2">
        <div className="bg-palette-brand bg-opacity-5 w-full p-4 rounded-md">
        <ReactMarkdown>{item.long_description}</ReactMarkdown>
        </div>
    </div>
}