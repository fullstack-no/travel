import { Router } from "express";
import { User } from "../models/User.model";
import bcrypt from "bcrypt";
import { ACCESS_TOKEN, REFRESH_TOKEN, generateTokens } from "../utils/common";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/info", authMiddleware, async (req, res) => {
  const user = (req as any).user;

  res.json({ user, loggedIn: true });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "No username", error: 400 });
  }

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return res.status(400).json({ message: "Wrong pass", error: 400 });
  }

  const tokens = generateTokens({ id: user.id, username });

  res.json(tokens);
});

router.post("/register", async (req, res) => {
  const { username, password, age } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: "Username is existed", error: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
    age,
    role: "User",
  });

  await user.save();

  res.json({ message: "Created successfully" });
});

router.post("/refresh-token", (req, res) => {
  const refreshToken = req.body["token"];

  try {
    const payload: any = jwt.verify(refreshToken, REFRESH_TOKEN);

    const { id, username } = payload;

    const tokens = generateTokens({ id, username });

    res.json(tokens);
  } catch (error) {
    return res.status(400).json({ message: "Token failed", error: 400 });
  }
});

export const authRouter = router;
