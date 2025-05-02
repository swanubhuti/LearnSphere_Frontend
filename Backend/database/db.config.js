import { PrismaClient } from '../generated/client.js/client.js';
const prisma = new PrismaClient({
    log :["query"]
});

export default prisma;