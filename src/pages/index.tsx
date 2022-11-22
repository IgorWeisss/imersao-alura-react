import { useEffect, useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { Timeline } from "../components/TimeLine";
import { Favorites } from "../components/Favorites";

import config from '../../config.json'
import { PrismaClient } from "@prisma/client";
import { useSWRGet } from "../hooks/useSWRGet";

export default function Home () {
  
  const [searchFilter, setSearchFilter] = useState('')
  // const [videos, setVideos] = useState({})

  const organizeVideosByPlaylists = (data:any) => {
    const videosByPlaylist = data.reduce((acc:any, cur:any) => {
  
      const { playlist, ...videoProps } = cur
    
      const videos = acc[playlist] || []
      videos.push(videoProps)
    
      return (
        {
          ...acc,
          [playlist]: videos
        }
      )
    
    },[])

    // setVideos(videosByPlaylist)
  }

  const {videos, isError} = useSWRGet('getVideos')

  if (isError) console.log(isError)  


  return (
    <div className="flex flex-col">
      <Menu setFilter={setSearchFilter}/>
      <Header banner={config.banner} github={config.github} job={config.job} name={config.name}/>
      <Timeline filter={searchFilter} playlists={videos}/>
      <Favorites favorites={config.favorites}/>
    </div>
  )
}

// export async function getServerSideProps() {
//   const prisma = new PrismaClient
//   const data = await prisma.videos.findMany(
//     {
//       select: {
//         playlist: true,
//         id: true,
//         thumb: true,
//         title: true,
//         url: true,
//         created_at: false
//       }
//     }
//   )

//   return {
//     props: {data}
//   }
// }