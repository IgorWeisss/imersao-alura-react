import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const favorite = req.body

  try {
    
    const newFavorite = await prisma.favorites.create(
      {
        data: {
          name: favorite.name,
          avatar: favorite.avatar,
          url: favorite.url,
          userId: favorite.userId
        }
      }
    )
    
    res.json(newFavorite)

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}