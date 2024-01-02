/*
  Warnings:

  - Added the required column `receiver_id` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id_message" TEXT NOT NULL PRIMARY KEY,
    "id_chat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "Chat" ("id_chat") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("content", "id_chat", "id_message") SELECT "content", "id_chat", "id_message" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
