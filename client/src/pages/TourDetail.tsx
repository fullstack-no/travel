import { Tour } from "data/tour";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import { data, reviews as reviewsData } from "data/data";
import { toast, useToast } from "react-toastify";

export const TourDetails = () => {
  const { id } = useParams();

  const [tour, setTour] = useState<Tour | undefined>(undefined);
  const [formState, setFormState] = useState({
    guest: "" as unknown as number,
    name: "",
    phone: "",
    date: "",
  });

  const [reviews, setReviews] = useState(reviewsData);

  const [reviewText, setReviewText] = useState("");
  const [reviewStar, setreviewStar] = useState(5);

  const nostar = 5 - reviewStar;

  const fee = 10;

  const navigate = useNavigate();

  const calculateGuest = () => {
    let guest = Number(formState.guest);
    let people = 1;

    if (!isNaN(guest)) {
      if (guest > people) {
        people = guest;
      }
    }
    return people;
  };

  const people = calculateGuest();

  useEffect(() => {
    setTour(data.find((tour) => tour.id === id));
  }, []);

  if (!tour) return <div className="py-20">no tour</div>;

  const totalTravel = people * tour?.price;
  const total = totalTravel + fee;

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setFormState({ ...formState, [target.name]: target.value });
  };

  // validate
  const validateForm = () => {
    const errors = {} as { [k in keyof typeof formState]?: string };

    const { date, guest, name, phone } = formState;

    if (!name) errors.name = "Name is required";

    if (!phone) {
      errors.phone = "Phone is required";
    }
    if (!date) errors.date = "Date is required";

    return errors;
  };

  const handleSubmit = () => {
    console.log(formState);

    const errors = validateForm();

    if (Object.keys(errors).length) {
      toast(Object.values(errors)[0], { type: "error" });
      return;
    }

    toast("booked", { type: "success" });
    navigate("/thank-you");
  };

  const changeReviewText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setReviewText(target.value);
  };

  const handleReview = () => {
    console.log("review");
    console.log(reviewStar, reviewText);
  };

  return (
    <div className="relative container mx-auto px-1 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 lg:min-h-[1000px]">
      <div className="w-full lg:grid-cols-subgrid lg:h-fit lg:col-span-3">
        <img
          src={tour.img}
          alt=""
          className="w-full h-96 object-cover rounded-md"
        />
      </div>

      <form className="block lg:absolute top-0 right-0 lg:translate-y-20 lg:-translate-x-1 w-full lg:w-1/3 max-w-[600px] border border-slate-200 rounded-md p-8 mx-auto bg-white">
        <div className="flex items-center justify-between gap-8 mb-12">
          <div className="text-slate-500">
            <span className="text-xl font-bold">${tour.price}</span>
            /person
          </div>

          <div className="flex items-center">
            <FaStar className="text-amber-500" />
            <div className="ml-2 text-slate-500">{tour.star}</div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-12">
          <div className="text-xl font-medium mb-6">Infomation</div>

          <div className="border border-slate-200 rounded-md divide-y divide-slate-200">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="p-6 placeholder:text-slate-500 text-lg focus:outline-none block w-full "
              value={formState.name}
              onChange={handleChangeForm}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="p-6 placeholder:text-slate-500 text-lg focus:outline-none block w-full "
              value={formState.phone}
              onChange={handleChangeForm}
              autoComplete="off"
            />
            <div className="flex flex-wrap items-center justify-between gap-x-4">
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChangeForm}
                className="focus:outline-none p-4 shrink-0 grow-0"
              />
              <input
                type="number"
                placeholder="guest"
                name="guest"
                className="p-4 w-32 grow-0 focus:outline-none shrink-0 "
                value={formState.guest}
                onChange={handleChangeForm}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between gap-6 text-slate-500">
            <div>
              ${tour.price} x {people}
            </div>

            <div>${totalTravel}</div>
          </div>

          <div className="flex items-center justify-between gap-6 text-slate-500">
            <div>Service charge</div>

            <div>${fee}</div>
          </div>
          <div className="flex items-center justify-between gap-6 text-slate-900">
            <div>Total</div>

            <div>${total}</div>
          </div>
        </div>

        <button
          className="py-3 px-6 bg-amber-500 text-white text-center w-full rounded-full capitalize hover:bg-amber-600 focus:outline-none"
          type="button"
          onClick={handleSubmit}
        >
          book now
        </button>
      </form>

      <div className="hidden lg:block lg:col-span-2"></div>

      <div className="col-span-3">
        <h1 className="text-4xl font-bold mb-8">{tour.name}</h1>

        <div className="flex items-center mb-4">
          <FaStar className="text-amber-500 mr-2" />
          <div className="capitalize text-slate-500">
            {tour.star ? tour.star : "Not Rated"}
          </div>
        </div>

        <div className="text-2xl font-medium mb-4 mt-8">Description</div>
        <div className="text-slate-600">{tour.description}</div>

        {/* reviews */}

        <div className="mt-12 border border-slate-200 p-4 w-full">
          <h1 className="text-4xl font-bold mb-6">Reviews</h1>
          <form className="mb-16">
            <div className="px-6 py-3 rounded-full w-full border border-amber-200 flex items-center justify-between gap-6 mb-6">
              <input
                type="text"
                placeholder="Share your thoughts..."
                className="grow text-lg focus:outline-none border-none"
                name="reviewText"
                value={reviewText}
                onChange={changeReviewText}
              />

              <button
                className="bg-amber-500 text-white hover:bg-amber-600 rounded-full px-4 py-2 text-lg"
                type="button"
                onClick={handleReview}
              >
                Submit
              </button>
            </div>

            <div className="pl-4 flex items-center gap-2 flex-nowrap">
              {[...Array(5)].map((item, idx) =>
                idx < reviewStar ? (
                  <FaStar
                    key={idx}
                    className="text-amber-500 cursor-pointer"
                    onClick={() => setreviewStar(idx + 1)}
                  />
                ) : (
                  <FaRegStar
                    key={idx}
                    className="text-slate-700 cursor-pointer"
                    onClick={() => setreviewStar(idx + 1)}
                  />
                )
              )}
            </div>
          </form>

          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div className="flex gap-4">
                <img src="" alt="" className="w-8 h-8 rounded-md" />
                <div>
                  <div className="text-lg font-medium">{review.user}</div>
                  <div className="text-slate-500 text-sm mb-4">
                    {review.createdAt}
                  </div>

                  <div className="flex items-center">
                    <FaStar className="text-amber-500 mr-2" />
                    <div className="text-slate-500">{review.star}</div>
                  </div>
                  <div>{review.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
