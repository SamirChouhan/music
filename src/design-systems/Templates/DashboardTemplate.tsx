'use client'
import { Playlist } from "@/utils/Api"
import Image from "next/image";
import { useEffect, useState } from "react";

export const DashboardTemplate = () => {
    const [playlist, setPlatList] = useState([])
    const playlistData = async () => {
        const res = await Playlist();
        setPlatList(res.data.results)
    }
    useEffect(() => {
        playlistData()
    }, [])
    console.log("playlist", playlist);

    return (
        <div className="py-14 px-9">
            <div>
                What's new
            </div>
            <div className="flex gap-2 overflow-x-auto w-full custom-scrollbar">
      {playlist?.map((item:any, key) => (
        <div key={key} className="w-full">
          <Image src={item.image[2].url} alt="" width={100} height={100} className="h-[228px] w-[192px]" />
        </div>
      ))}
    </div>
        </div>
    )
}