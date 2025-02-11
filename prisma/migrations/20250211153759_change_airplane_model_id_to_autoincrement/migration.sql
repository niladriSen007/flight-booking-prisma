-- AlterTable
CREATE SEQUENCE airplane_id_seq;
ALTER TABLE "Airplane" ALTER COLUMN "id" SET DEFAULT nextval('airplane_id_seq');
ALTER SEQUENCE airplane_id_seq OWNED BY "Airplane"."id";
