
const { expressMiddleware } = require("@apollo/server/express4");
import { Request, Response } from 'express';
const bodyParser = require("body-parser");
const cors = require("cors"); 
const express = require("express");


type User = {
  name: string;
  email: string;
  hashedPassword: string;
};

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());

  

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use('/graphql', expressMiddleware(server));

  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hi from server" });
  });

  app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}

startServer();
