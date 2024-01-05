-- CreateTable
CREATE TABLE "Chat" (
    "chat_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Chat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Message" (
    "message_id" TEXT NOT NULL PRIMARY KEY,
    "chat_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "userRid" TEXT,
    CONSTRAINT "Message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat" ("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_userRid_fkey" FOREIGN KEY ("userRid") REFERENCES "users" ("rid") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "rid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "permissions" TEXT NOT NULL DEFAULT 'client',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_users" ("createdAt", "name", "office", "permissions", "rid", "sector", "updatedAt") SELECT "createdAt", "name", "office", "permissions", "rid", "sector", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE TABLE "new_bags" (
    "nid" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rid_autor" TEXT NOT NULL,
    CONSTRAINT "bags_rid_autor_fkey" FOREIGN KEY ("rid_autor") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bags" ("createdAt", "image_url", "location", "nid", "operation", "rid_autor", "state", "updatedAt") SELECT "createdAt", "image_url", "location", "nid", "operation", "rid_autor", "state", "updatedAt" FROM "bags";
DROP TABLE "bags";
ALTER TABLE "new_bags" RENAME TO "bags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
