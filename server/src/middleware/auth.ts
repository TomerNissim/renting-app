import { Request, Response, NextFunction } from "express";
const { verify } = require("jsonwebtoken");
import { IUser } from "../interfaces/interface";
import { resTemplate } from "../utils/responses";
interface Decoded extends Request {
  decoded: { id: String };
}
export const validToken = (req: Decoded, res: Response, next: NextFunction) => {
  let token = req.get("authorization");
  if (token) {
    token = token.split(" ")[1];
    verify(
      token,
      process.env.JWT_SECRET,
      (err: Error, decoded: Decoded["decoded"]) => {
        try {
          if (err) {
            throw new Error();
          }
          req.decoded = decoded;
          next();
        } catch (e) {
          res.status(403).send(resTemplate.clientError.forbidden);
          return;
        }
      }
    );
  } else {
    return res.status(401).send(resTemplate.clientError.unAuthorized);
  }
};
