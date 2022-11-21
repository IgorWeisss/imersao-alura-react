import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const prisma = new PrismaClient

  // const play = await prisma.playlists.create({
  //   data: {
  //     playlistName: "Teste"
  //   }
  // })

  // const play = await prisma.videos.create({
  //   data: {
  //     thumb:'teste',
  //     title:"teste",
  //     url:'teste',
  //     playlistsId: '5cda3045-10f1-4849-86d0-fa22c8d07e7f'
  //   }
  // })

  const play = await prisma.videos.findMany()
  
  res.json(play)
}