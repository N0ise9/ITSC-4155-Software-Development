"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const allUsers = await prisma.restaurant.findMany({
        where: {
            location: {
                equals: "4425 Sharon Rd",
                path: ["address1"],
            },
        },
    });
    console.info(allUsers);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
