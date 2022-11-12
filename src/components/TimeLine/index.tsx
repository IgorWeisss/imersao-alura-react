import { VideoCard } from "./components/VideoCard"

interface VideosProps {
  title: string,
  url: string,
  thumb: string
}

interface PlaylistsProps {
  playlists: {
    [objKey: string]: VideosProps []
  }
  filter: string
}

export function Timeline ({ playlists, filter }:PlaylistsProps) {
  const playlistsNames = Object.keys(playlists)
  
  return (
    <div className="bg-backgroundBase">
      {playlistsNames.map((name) => {
        
        const videos = playlists[name]
        
        return (
          <section 
            key={name} 
            className="px-4 py-4 md:py-8 overflow-hidden w-full capitalize"
          >
            <h3 className="font-bold text-base text-textColorBase mb-4">{name}</h3>
            <ul className="grid gap-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase()
                  const filterNormalized = filter.toLowerCase()
                  return titleNormalized.includes(filterNormalized)
                })
                .map((video) => {
                return (
                  <VideoCard 
                    thumb={video.thumb} 
                    title={video.title} 
                    url={video.url} 
                    key={`${video.title}${video.url}`}
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