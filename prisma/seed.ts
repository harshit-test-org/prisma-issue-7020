import { UserRole, PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  return await prisma.user.create({
    data: {
      email: "test@test.com",
      password: bcrypt.hashSync("pw12345678", 10),
      role: UserRole.ADMIN,
      activated: false,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    console.info("Exiting...");
    process.exit(0);
  });
