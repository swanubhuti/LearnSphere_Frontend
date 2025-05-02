/*
  Warnings:

  - You are about to drop the column `courseTitle` on the `Course` table. All the data in the column will be lost.
  - Added the required column `title` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "courseTitle",
ADD COLUMN     "title" TEXT NOT NULL;
