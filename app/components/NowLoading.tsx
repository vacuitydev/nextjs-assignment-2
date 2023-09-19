"use client"
import { ClipLoader } from "react-spinners";

export default function NowLoading(){
    return <div className="w-full h-full py-[15%] flex flex-col items-center justify-center">
        <div className="h-full grow">
            <ClipLoader loading={true} size="8rem" color={"#fff"}/>

        </div>
        <div className="grow h-full text-4xl text-palette-brand">Now Loading...</div>
      </div>
}