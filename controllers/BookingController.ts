import z from "zod";
import { Controller } from "../libs/Controller";
import { bookingSchema } from "../libs/validation/BookingSchema";

export class BookingController extends Controller {
    public booking () {
        this.response.render("pages/clientBookingForm", {});
    }
}