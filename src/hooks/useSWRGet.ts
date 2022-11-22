import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

export function useSWRGet (route:string) {
  const { data, error } = useSWR(`/api/${route}`, fetcher)

  if (!error && !data) {
    return {
      videos: {
        "": [
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "1"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "2"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "3"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "4"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "5"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "6"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "7"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "8"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "11"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "12"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "13"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "14"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "15"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "16"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "17"
            },
            {
              "title": "",
              "url": "",
              "thumb": "https://awlights.com/wp-content/uploads/sites/31/2017/05/video-placeholder.png",
              "id": "18"
            }
          ]
        }
    }
  }
  
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