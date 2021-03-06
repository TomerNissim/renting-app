"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
exports.login = require("express").Router();
const loginController_1 = __importDefault(require("../controllers/loginController"));
const authController_1 = __importDefault(require("../controllers/authController"));
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
exports.login.post("/sign-up", loginController_1.default.signUp);
exports.login.post("/sign-in", loginController_1.default.signIn, authController_1.default.createToken);
exports.login.post("/profile-image", upload.single("image"), loginController_1.default.uploadProfileImg);
