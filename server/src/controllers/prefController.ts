import { Request, Response } from "express";
import { UserPrefModel } from "../db/models/UserPrefModel";
import { resTemplate } from "../utils/responses";
interface Decoded extends Request {
  decoded: { id: string };
}
const setUserPreferences = async (
  req: Decoded,
  res: Response
): Promise<void> => {
  if (!req.body) {
    res.status(400).send(resTemplate.clientError.badRequest);
    return;
  }
  try {
    await UserPrefModel.createIfNotExistsByUserId(req.body, req.decoded.id);
    res.status(200).send(resTemplate.success.created);
  } catch (e) {
    console.error(e);
    res.status(500).send(resTemplate.serverError);
  }
};

const getUserPreferences = async (
  req: Decoded,
  res: Response
): Promise<void> => {
  if (!req.body) {
    res.status(400).send(resTemplate.clientError.badRequest);
    return;
  }
  try {
    const userPref = await UserPrefModel.findOne({ userId: req.decoded.id });
    if (userPref) {
      res.status(200).send({ ...resTemplate.success.general, data: userPref });
    } else {
      res.status(200).send({ ...resTemplate.success.noContent });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send(resTemplate.serverError);
  }
};

const prefController = {
  setUserPreferences,
  getUserPreferences,
};
export default prefController;
