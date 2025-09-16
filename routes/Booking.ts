import { request, response, Router } from "express";
import { BookingController } from "../controllers/BookingController";

const bookingRouter = Router ();

// Ticket Booking Page

//Browse
bookingRouter.get ("/", (request, response) =>
{ const controller = new BookingController(request,response);
    controller.booking();
}
);

export default bookingRouter;