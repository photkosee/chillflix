import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();

// prevent hot loading by storing in global
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
