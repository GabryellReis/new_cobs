-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chat" (
    "id_chat" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "id_agent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" DATETIME,
    "state" TEXT NOT NULL DEFAULT 'openned',
    CONSTRAINT "Chat_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chat_id_agent_fkey" FOREIGN KEY ("id_agent") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chat" ("createdAt", "finishedAt", "id_agent", "id_chat", "id_user", "updatedAt") SELECT "createdAt", "finishedAt", "id_agent", "id_chat", "id_user", "updatedAt" FROM "Chat";
DROP TABLE "Chat";
ALTER TABLE "new_Chat" RENAME TO "Chat";
CREATE TABLE "new_Message" (
    "id_message" TEXT NOT NULL PRIMARY KEY,
    "id_chat" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'forwarded',
    CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_id_chat_fkey" FOREIGN KEY ("id_chat") REFERENCES "Chat" ("id_chat") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("content", "id_chat", "id_message", "receiver_id", "sender_id") SELECT "content", "id_chat", "id_message", "receiver_id", "sender_id" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
