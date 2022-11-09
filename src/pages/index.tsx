import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/TimeLine/Timeline";
import config from '../../config.json'
import { Favorites } from "../components/Favorites";

export default function Index () {
  return (
    <div className="flex flex-col">
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
      <Favorites favorites={config.favorites}/>
    </div>
  )
}