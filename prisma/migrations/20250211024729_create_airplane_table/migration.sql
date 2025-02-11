-- CreateTable
CREATE TABLE "Airplane" (
    "id" INTEGER NOT NULL,
    "modelName" VARCHAR(200) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Airplane_modelName_idx" ON "Airplane"("modelName");
