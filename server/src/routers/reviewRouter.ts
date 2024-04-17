import { Router } from "express";
import { Tour } from "../models/Tour.model";
import { Review } from "../models/Review.model";

const router = Router();

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const tour = await Tour.findById(id);

  if (!tour) {
    return res.status(400).json({ error: 400 });
  }

  await Review.create({
    ...data,
    tour: id,
    user: (req as any).user.id,
  });

  res.json({ message: "created successfully" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const reviews = await Review.find({ tour: id })
  .exec();

  res.json({ data: reviews });
});

export const reviewRouter = router;
