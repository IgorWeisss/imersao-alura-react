import axios from 'axios'
import useSWR from 'swr'
import { organizeVideosByPlaylists } from '../components/TimeLine'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export function useSWRGetVideos (fallback:any) {
  let { data, error } = useSWR(`/api/getVideos`, fetcher, {fallbackData: fallback, refreshInterval: 50})
  
  if (data) {
    data = organizeVideosByPlaylists(data)
  }

  return {
    videos: data,
    isLoading: !error && !data,
    isError: error
  }
}