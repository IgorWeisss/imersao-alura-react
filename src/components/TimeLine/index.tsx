import { VideoCard } from "./components/VideoCard"

interface VideosProps {
  title: string,
  url: string,
  thumb: string
  id: string
}

interface Playlists {
  [objKey: string]: VideosProps []
}

interface PlaylistsProps {
  playlists: Playlists
  filter: string
}

export function Timeline ({ playlists, filter }:PlaylistsProps) {
  
  function getFilteredVideos () {

    const playlistsArray = Object.keys(playlists)
    let result = {}
  
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
  
  const filteredVideos:Playlists = getFilteredVideos()
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
}