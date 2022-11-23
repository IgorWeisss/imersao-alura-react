import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export function useSWRGet (route:string) {
  const { data, error } = useSWR(`/api/${route}`, fetcher)
  
  if (data) {
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
    return {
      videos: videosByPlaylist,
      isError: error
    }
  }

  return {
    videos: data,
    isLoading: !error && !data,
    isError: error
  }
}