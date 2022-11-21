-- CreateTable
CREATE TABLE "playlists" (
    "id" TEXT NOT NULL,
    "playlistName" TEXT NOT NULL,

    CONSTRAINT "playlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "playlistsId" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_playlistsId_fkey" FOREIGN KEY ("playlistsId") REFERENCES "playlists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
