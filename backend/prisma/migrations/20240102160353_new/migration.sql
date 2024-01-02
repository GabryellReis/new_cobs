-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chat" (
    "chat_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Chat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chat" ("chat_id", "createdAt", "state", "updatedAt", "user_id") SELECT "chat_id", "createdAt", "state", "updatedAt", "user_id" FROM "Chat";
DROP TABLE "Chat";
ALTER TABLE "new_Chat" RENAME TO "Chat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
