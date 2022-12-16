import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { favoriteId } = req.query

  try {
    
    if (favoriteId && typeof favoriteId=='string') {
      const deletedFavorite = await prisma.favorites.delete(
        {
          where: {
            id: favoriteId
          }
        }
      )
      
      res.json(deletedFavorite)
    }

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}