/*
  Warnings:

  - You are about to drop the `chats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "chats";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "messages";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tickets";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Chat" (
    "id_chat" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "id_agent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" DATETIME,
    CONSTRAINT "Chat_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chat_id_agent_fkey" FOREIGN KEY ("id_agent") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Message" (
    "id_message" TEXT NOT NULL PRIMARY KEY,
    "id_chat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "Message_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "Chat" ("id_chat") ON DELETE RESTRICT ON UPDATE CASCADE
);
