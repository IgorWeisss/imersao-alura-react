/*
  Warnings:

  - You are about to drop the column `usersId` on the `favorites` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_usersId_fkey";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "usersId",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
