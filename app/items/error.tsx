"use client";
import Image from "next/image";
import Link from "next/link";
export default function ItemError() {
  return (
    <div>
      <div className="h-96 w-full px-8 py-1 flex flex-col justify-center items-center">
      <div className="w-full relative h-56">
        <Image alt="" src={"/error.png"} layout='fill' objectFit="contain"/>
      </div>
        <div>There was an error trying to get that item</div>
        <Link href="/items" className="btn bg-palette-accent">
            Go back to items
        </Link>
      </div>
    </div>
  );
}
