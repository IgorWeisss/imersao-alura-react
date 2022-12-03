/*
  Warnings:

  - Added the required column `avatar` to the `favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `favorites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "favorites" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
