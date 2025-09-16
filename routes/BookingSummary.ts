import {request, response, Router} from "express";
import { BookingSummaryController } from "../controllers/BookingSummaryController";

const bookingSummaryRouter = Router();

// Ticket Summary Page

bookingSummaryRouter.get ("/", (request, response) =>
{ const controller = new BookingSummaryController (request,response);
    controller.bookingSummary();
}
);

export default bookingSummaryRouter;