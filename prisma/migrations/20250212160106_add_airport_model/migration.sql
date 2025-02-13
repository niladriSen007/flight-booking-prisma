-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "code" VARCHAR(3) NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_key" ON "Airport"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");

-- CreateIndex
CREATE INDEX "Airport_code_idx" ON "Airport"("code");

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
