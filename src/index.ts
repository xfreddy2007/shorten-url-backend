// import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);

export default server;
