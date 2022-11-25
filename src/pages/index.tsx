import { useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { organizeVideosByPlaylists, Timeline } from "../components/TimeLine";
import { Favorites } from "../components/Favorites";

import config from '../../config.json'
import { PrismaClient } from "@prisma/client";
import { useSWRGetVideos } from "../hooks/useSWRGet";

export default function Home ({ data }:any) {
  
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <div className="flex flex-col">
      <Menu setFilter={setSearchFilter}/>
      <Header banner={config.banner} github={config.github} job={config.job} name={config.name}/>
      <Timeline data={data} filter={searchFilter} />
      <Favorites favorites={config.favorites}/>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient
  
  const data = await prisma.videos.findMany(
    {
      select: {
        playlist: true,
        id: true,
        thumb: true,
        title: true,
        url: true,
        created_at: false
      }
    }
  )

  await prisma.$disconnect()

  return {
    props: {
      data
    },
    revalidate: 1
  }
}