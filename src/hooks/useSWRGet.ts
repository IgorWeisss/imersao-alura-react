import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export function useSWRGet (route:string) {
  const { data, error } = useSWR(`/api/${route}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}