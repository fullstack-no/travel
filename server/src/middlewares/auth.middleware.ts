import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN } from "../utils/common";

export const authMiddleware = (req: Request, res: Response, next: Function) => {
  const [type, token] = req.headers.authorization?.split(" ") || [];

  if (!type || type !== "Bearer" || !token) {
    res.status(401).json({ message: "Unauthorized", error: 401 });
    return;
  }

  try {
    const payload = jwt.verify(token, ACCESS_TOKEN);

    (req as any).user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: 401 });
    return;
  }
};
