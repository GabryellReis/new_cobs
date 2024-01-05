/*
  Warnings:

  - You are about to drop the column `rid_autor` on the `bags` table. All the data in the column will be lost.
  - Added the required column `rid_author` to the `bags` table without a default value. This is not possible if the table is not empty.

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
    "updatedAt" DATETIME NOT NULL,
    "rid_author" TEXT NOT NULL,
    CONSTRAINT "bags_rid_author_fkey" FOREIGN KEY ("rid_author") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_bags" ("createdAt", "image_url", "location", "nid", "operation", "state", "updatedAt") SELECT "createdAt", "image_url", "location", "nid", "operation", "state", "updatedAt" FROM "bags";
DROP TABLE "bags";
ALTER TABLE "new_bags" RENAME TO "bags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
