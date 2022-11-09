import { VideoCard } from "./VideoCard"

interface VideosProps {
  title: string,
  url: string,
  thumb: string
  id: string
}

interface PlaylistsProps {
  playlists: {
    [objKey: string]: VideosProps []
  }
}

export function Timeline ({ playlists }:PlaylistsProps) {
  const playlistsNames = Object.keys(playlists)
  
  return (
    <>
      {playlistsNames.map((name) => {
        
        const videos = playlists[name]
        
        return (
          <section key={name}>
            <h3>{name}</h3>
            <ul className="flex flex-1 gap-1">
              {videos.map((video) => {
                return (
                  <VideoCard thumb={video.thumb} title={video.title} url={video.url} key={video.id}/>
                )
              })}
            </ul>
          </section>
        )
      })}
    </>
  )
}