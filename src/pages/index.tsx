import { useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header/Header";
import { Timeline } from "../components/TimeLine";
import { Favorites } from "../components/Favorites";

import { prisma } from "../lib/prisma";


export default function Home ({ videos, userInfo }:any) {
  
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <div className="flex flex-col">
      <Menu setFilter={setSearchFilter} filter={searchFilter}/>
      <Header banner={userInfo.banner} github={userInfo.github} job={userInfo.job} name={userInfo.name}/>
      <Timeline data={videos} filter={searchFilter} />
      <Favorites data={userInfo.favorites}/>
    </div>
  )
}

export async function getStaticProps() {
  
  const videos = await prisma.videos.findMany(
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

  const userInfo = await prisma.users.findUnique(
    {
      where: {
        id: "9c956367-559b-4f7f-9c24-3076fa9f7813"
      },
      select: {
        banner:true,
        favorites:true,
        github:true,
        job:true,
        name:true,
      }
    }
  )

  await prisma.$disconnect()

  return {
    props: {
      videos,
      userInfo,
    },
    revalidate: 1
  }
}