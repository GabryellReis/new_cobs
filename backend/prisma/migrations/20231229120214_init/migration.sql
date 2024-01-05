/*
  Warnings:

  - Added the required column `image_url` to the `bags` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bags" (
    "nid" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rid_autor" TEXT NOT NULL,
    CONSTRAINT "bags_rid_autor_fkey" FOREIGN KEY ("rid_autor") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bags" ("createdAt", "location", "nid", "operation", "rid_autor", "state", "updatedAt") SELECT "createdAt", "location", "nid", "operation", "rid_autor", "state", "updatedAt" FROM "bags";
DROP TABLE "bags";
ALTER TABLE "new_bags" RENAME TO "bags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
