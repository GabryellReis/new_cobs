-- CreateTable
CREATE TABLE "users" (
    "rid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "permissions" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "bags" (
    "nid" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rid_autor" TEXT NOT NULL,
    CONSTRAINT "bags_rid_autor_fkey" FOREIGN KEY ("rid_autor") REFERENCES "users" ("rid") ON DELETE RESTRICT ON UPDATE CASCADE
);
