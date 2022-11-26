import { useSWRGetVideos } from "../../hooks/useSWRGetVideos"
import { VideoCard } from "./components/VideoCard"

interface VideosProps {
  title: string,
  url: string,
  thumb: string
  id: string
}

interface Videos {
  [objKey:string]: VideosProps[]
}

interface TimelineProps {
  data: any
  filter: string
}

export function organizeVideosByPlaylists (data:any) {
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

  return videosByPlaylist
}

function getFilteredVideos (playlists:Videos, filter:string) {

  const playlistsArray = Object.keys(playlists)
  let result = {} as Videos

  playlistsArray.forEach(playlist => {
    const videos = playlists[playlist]
    const filtered = videos
      .filter(video => {
        const filterNormalized = filter.toLowerCase()
        const titleNormalized = video.title.toLowerCase()
        return titleNormalized.includes(filterNormalized)
      })
    
    if ( filtered.length > 0 ) {
      result = {
        ...result,
        [playlist]: filtered
      }
    }
  })

  return result
}

export function Timeline ({data, filter}:TimelineProps) {

  const {videos} = useSWRGetVideos(data)
  
  if (videos) {
    const filteredVideos = getFilteredVideos(videos, filter)
    const playlistsNames = Object.keys(filteredVideos)
    
    return (
      <div className="bg-backgroundBase">
        {playlistsNames.map((name) => {
          
          const videos = filteredVideos[name]
          
          return (
            <section 
              key={name} 
              className="px-4 py-4 md:py-8 overflow-hidden w-full capitalize"
            >
              <h3 className="font-bold text-base text-textColorBase mb-4">{name}</h3>
              <ul className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                {videos
                  .map((video) => {
                  return (
                    <VideoCard 
                      thumb={video.thumb} 
                      title={video.title} 
                      url={video.url} 
                      key={video.id}
                    />
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="bg-backgroundBase flex items-center justify-center text-center p-10">
        <p className="text-5xl text-textInput">Ops! Alguma coisa não está funcionando aqui...</p>
      </div>
    )
  }

}