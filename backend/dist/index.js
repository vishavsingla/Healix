"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const PORT = Number(process.env.PORT) || 8000;
        app.use(express.json());
        app.use(bodyParser.json());
        app.use(cors());
        yield server.start();
        app.use('/graphql', expressMiddleware(server));
        app.get("/", (req, res) => {
            res.json({ message: "Hi from server" });
        });
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    });
}
startServer();
