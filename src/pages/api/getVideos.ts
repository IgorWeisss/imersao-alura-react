import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const prisma = new PrismaClient

  try {
    
    const data = await prisma.videos.findMany(
      {
        select: {
          playlist: true,
          id: true,
          thumb: true,
          title: true,
          url: true,
          created_at: false
        }
      }
    )
    
    res.json(data)

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}