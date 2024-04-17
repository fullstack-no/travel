import img1 from "assets/tour-img01.jpg";
import img2 from "assets/tour-img02.jpg";
import img3 from "assets/tour-img03.jpg";
import img4 from "assets/tour-img04.jpg";
import img5 from "assets/tour-img05.jpg";
import img6 from "assets/tour-img06.jpg";
import img7 from "assets/tour-img07.jpg";
import { Tour } from "./tour";

export const data: Tour[] = [
  {
    id: "1xx",
    img: img1,
    price: 20,
    name: "Westminister bridge",
    star: 4,
    location: "England",
    distance: 200,
    description: "this is description",
  },

  {
    id: "2xx",

    img: img2,
    price: 20,
    name: "Bali",
    star: 2,
    location: "Thailand",
    distance: 250,
    description: "this is description",
  },
  {
    id: "3xx",

    img: img3,
    price: 20,
    name: "Chiang Mai",
    star: 0,
    location: "Thailand",
    distance: 150,
    description: "this is description",
  },
  {
    id: "4xx",

    img: img4,
    price: 20,
    name: "Phuket",
    star: 5,
    location: "thailand",
    distance: 200,
    description: "this is description",
  },
  {
    id: "5xx",

    img: img5,
    price: 20,
    name: "sapa",
    star: 1,
    location: "viet nam",
    distance: 220,
    description: "this is description",
  },
  {
    id: "6xx",

    img: img6,
    price: 20,
    name: "ha long bay",
    star: 3,
    location: "viet nam",
    distance: 350,
    description: "this is description",
  },
  {
    id: "7xx",

    img: img7,
    price: 20,
    name: "Sunrise, Thailand",
    star: 4,
    location: "Phuket",
    distance: 100,
    description: "this is description",
  },

  {
    id: "8xx",

    img: img2,
    price: 20,
    name: "ha noi",
    star: 4,
    location: "viet nam",
    distance: 400,
    description: "this is description",
  },
  {
    id: "9xx",

    img: img5,
    price: 20,
    name: "Gili Islands",
    star: 4,
    location: "indonesia",
    distance: 500,
    description: "this is description",
  },
  {
    id: "10xx",

    img: img6,
    price: 20,
    name: "Maluk Beach",
    star: 4,
    location: "indonesia",
    distance: 200,
    description: "this is description",
  },
];

export const reviews = [
  {
    user: "john",
    createdAt: "2024-23-2",
    content: "this is good tour",
    star: 4,
  },
];
