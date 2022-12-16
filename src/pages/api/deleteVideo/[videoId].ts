import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { videoId } = req.query

  try {
    
    if (videoId && typeof videoId=='string') {
      const deletedVideo = await prisma.videos.delete(
        {
          where: {
            id: videoId
          }
        }
      )
      
      res.json(deletedVideo)
    }

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}