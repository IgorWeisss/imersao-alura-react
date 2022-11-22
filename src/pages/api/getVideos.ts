import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  async function main() {
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

  main()
  .then(async () => {
    await prisma.$disconnect()
    res.send()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })

}