import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const video = req.body

  try {
    
    const play = await prisma.videos.create(
      {
        data: {
          playlist: video.playlist,
          thumb: video.thumb,
          title: video.title,
          url: video.url,
        }
      }
    )
    
    res.json(play)

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}