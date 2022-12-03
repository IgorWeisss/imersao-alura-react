import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const user = req.body

  try {
    
    const newUser = await prisma.users.create(
      {
        data: {
          banner: user.banner,
          github: user.github,
          job: user.job,
          name: user.name
        }
      }
    )
    
    res.json(newUser)

  } catch (error) {
   
    console.log(error)
    res.json(error)

  }  
}