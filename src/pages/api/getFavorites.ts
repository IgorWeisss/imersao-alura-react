import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
    
      const data = await prisma.favorites.findMany(
        {
          where: {
            userId: "9c956367-559b-4f7f-9c24-3076fa9f7813"
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