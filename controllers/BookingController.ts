import { Controller } from "../libs/Controller";
import { bookingSchema } from "../libs/validation/BookingSchema";
import { bookingRepository } from "../repositories/Booking";
import { z } from "zod";

export class BookingController extends Controller {
  public async createBooking() {
    this.response.render("pages/clientBookingForm.ejs", {
      type: "create",
      values: {},
      formErrors: {},
      submitError: false,
    });
  }

  public async createBookingSubmission() {
    const formData = {
      firstName: this.request.body?.firstName,
      lastName: this.request.body?.lastName,
      email: this.request.body?.email,
      date: this.request.body?.date,
      vipTicket: this.request.body?.vipTicket,
      adultTicket: this.request.body?.adultTicket,
      enfantTicket: this.request.body?.enfantTicket,
    };

  
    
    const validationResult = bookingSchema.safeParse(formData);

    if (!validationResult.success) {
      const formErrors = z.treeifyError(validationResult.error);

      return this.response.render("pages/clientBookingForm.ejs", {
        type: "create",
        values: this.request.body,
        formErrors: formErrors.properties,
        submitError: false,
      });
    }

    const repository = new bookingRepository();
    const result = await repository.create(validationResult.data);


    if (!result) {
      
      return this.response.render("pages/clientBookingForm.ejs", {
        type: "create",
        values: this.request.body,
        formErrors: {},
        submitError: true,
      });
    }
 
    return this.response.redirect(303, "/payment");
  }

  
  public async showSummary() {
    const bookingId = Number(this.request.params.id);
    const repository = new bookingRepository();
    const booking = await repository.findById(bookingId);

    this.response.render("booking/bookingSummary.ejs", {
      booking: booking,
    });
  }
}
