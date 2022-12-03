import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export function useSWRGetFavorites (fallback:any) {
  let { data, error } = useSWR(`/api/getFavorites`, fetcher, {fallbackData: fallback, refreshInterval: 10} )

  return {
    favorites: data,
    isLoading: !error && !data,
    isError: error
  }
}