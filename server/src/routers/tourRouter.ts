import { Router } from "express";
import { Tour } from "../models/Tour.model";
import { Review } from "../models/Review.model";

const router = Router();

router.get("/", async (req, res) => {
  const tours = await Tour.find().exec();

  const ids = tours.map((t) => t.id);

  const stars = await Review.aggregate([
    { $match: { tour: { $in: ids } } },
    { $group: { _id: "$tour", star: { $avg: "$star" } } },
  ]);

  const fullTours = tours.map((t) => {
    const star = stars.find((s) => s._id === t._id)?.star || 0;

    return { ...t.toJSON(), star };
  });
  res.json({ data: fullTours });
});

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    await Tour.create(data);
    res.json({ message: "created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "created failed", error: 400 });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id);

    const stars = await Review.aggregate([
      { $match: { tour: id } },
      { $group: { _id: { tour: "$tour" }, average: { $avg: "$star" } } },
    ]).exec();

    res.json({
      data: { ...tour?.toJSON(), star: Math.ceil(stars[0]?.average || 0) },
    });
  } catch (error) {
    console.log(error);
    res.json({ error: 400 });
  }
});

export const tourRouter = router;
