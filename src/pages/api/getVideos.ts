import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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
      await prisma.$disconnect()

    } catch (error) {
     
      console.log(error)
      res.json(error)
      await prisma.$disconnect()

    }
}