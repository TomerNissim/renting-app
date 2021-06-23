import express from "express";
import cors from "cors";
import { login } from "./routes/login";
import { auth } from "./routes/auth";
import { apartment } from "./routes/apartment";
import { reference } from "./routes/reference";
import { user } from "./routes/user";
import { googleAuth } from "./routes/googleAuth";
const cookieParser = require("cookie-parser");

export const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/login", login);
app.use("/auth", auth);
app.use("/apartment", apartment);
app.use("/reference", reference);
app.use("/user", user);
app.use("/googleAuth", googleAuth);
