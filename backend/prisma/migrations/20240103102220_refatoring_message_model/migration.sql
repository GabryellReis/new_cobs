-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id_message" TEXT NOT NULL PRIMARY KEY,
    "id_chat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "Chat" ("id_chat") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("content", "id_chat", "id_message", "receiver_id", "sender_id") SELECT "content", "id_chat", "id_message", "receiver_id", "sender_id" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
