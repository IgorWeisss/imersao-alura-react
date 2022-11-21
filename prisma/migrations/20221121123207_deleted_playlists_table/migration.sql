/*
  Warnings:

  - You are about to drop the column `playlistsId` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the `playlists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `playlist` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_playlistsId_fkey";

-- AlterTable
ALTER TABLE "videos" DROP COLUMN "playlistsId",
ADD COLUMN     "playlist" TEXT NOT NULL;

-- DropTable
DROP TABLE "playlists";
