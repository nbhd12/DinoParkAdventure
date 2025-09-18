import { request, response, Router } from "express";
import { BookingController } from "../controllers/BookingController";

const bookingRouter = Router ();



//Browse
bookingRouter.get ("/", (request, response) =>
{ const controller = new BookingController(request,response);
    controller.createBooking();
}
);

bookingRouter.post("/", (request, response) => {
  const controller = new BookingController(request, response);
  controller.createBookingSubmission();
});

export default bookingRouter;