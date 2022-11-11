import { useState } from "react";

import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { Timeline } from "../components/TimeLine";
import { Favorites } from "../components/Favorites";

import config from '../../config.json'

export default function Home () {
  
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <div className="flex flex-col">
      <Menu setFilter={setSearchFilter}/>
      <Header banner={config.banner} github={config.github} job={config.job} name={config.name}/>
      <Timeline filter={searchFilter} playlists={config.playlists}/>
      <Favorites favorites={config.favorites}/>
    </div>
  )
}