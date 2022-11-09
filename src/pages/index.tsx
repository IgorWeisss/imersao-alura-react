import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Timeline } from "../components/TimeLine/Timeline";
import config from '../../config.json'

export default function Index () {
  return (
    <div>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
    </div>
  )
}