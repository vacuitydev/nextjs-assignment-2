import { type item } from "@prisma/client";
import { GetStaticPaths } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "../../../api/prisma";
export const getStaticPaths = (async () => {
  const slugs = await prisma.item.findMany({
    select: {
      slug: true,
    },
  });
  const paths = slugs.map((slug) => {
    return {
      params: slug
    }
  });
  return {
    paths,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

const fetchItemBySlug = async (slug: string): Promise<item> => {
  const foundItem = await prisma.item.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!foundItem) {
    notFound();
  }
  return foundItem;
};
export default async function ItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const item = await fetchItemBySlug(slug);
  // To get the loading screen in its full glory
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="w-full p-2">
      <div className="bg-palette-brand bg-opacity-5 w-full p-4 rounded-md">
        <ReactMarkdown>{item.long_description}</ReactMarkdown>
      </div>
    </div>
  );
}
