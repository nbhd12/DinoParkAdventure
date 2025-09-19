import z from "zod";
import { Controller } from "../libs/Controller";
import { bookingSchema } from "../libs/validation/BookingSchema";
import { bookingRepository } from "../repositories/Booking";
import { Booking } from "../models/Booking";

export class BookingController extends Controller {
  // Route GET `/booking` 
  public async createBooking() {
    this.response.render("pages/clientBookingForm.ejs", {
      type: "create",
      values: {},
      formErrors: {},
      submitError: false,
    });
  }

  // Route POST `/booking/create` 
  public async createBookingSubmission() {
    console.log("=== FORM SUBMISSION STARTED ===");
    console.log("Raw request body:", this.request.body);
    
    // Get data from form to convert the strings to numbers)
    const formData = {
      firstName: this.request.body?.firstName,
      lastName: this.request.body?.lastName,
      email: this.request.body?.email,
      date: this.request.body?.date,
      vipTicket: parseInt(this.request.body?.vipTicket) || 0,
      adultTicket: parseInt(this.request.body?.adultTicket) || 0,
      enfantTicket: parseInt(this.request.body?.enfantTicket) || 0,
    };

    console.log("Processed form data:", formData);

    //  Testing for Zod validation
    const validationResult = bookingSchema.safeParse(formData);
    
    console.log("Zod validation success:", validationResult.success);
    if (!validationResult.success) {
        console.log("Zod validation errors:", validationResult.error.format());
        return this.response.render("pages/clientBookingForm.ejs", {
          type: "create",
          values: this.request.body,
          formErrors: validationResult.error.format(),
          submitError: false,
        });
    }

    console.log("Validated data:", validationResult.data);

    // Next, Calculating total price
    const vipPrice = validationResult.data.vipTicket * 150;
    const adultPrice = validationResult.data.adultTicket * 100;
    const enfantPrice = validationResult.data.enfantTicket * 80;
    const totalPrice = vipPrice + adultPrice + enfantPrice;

    // Generate booking reference
    const currentYear = new Date().getFullYear();
    const bookingReference = `DP${currentYear}${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`;

    //Create booking object
    const newBooking = new Booking(
      null,
      bookingReference,
      validationResult.data.date,
      totalPrice,
      "1", // user_id 
      false // paid status
    );

    // Saving to database
    const repository = new bookingRepository();
    // const result = await repository.create(newBooking);
    

console.log("Booking data being saved:", {
  reference: newBooking.getBookingReference(),
  date: newBooking.getBookingDate(), 
  price: newBooking.getTotalPrice(),
  userId: newBooking.getUserId(), 
  paid: newBooking.getPaid()
});

const result = await repository.create(newBooking);
console.log("Database result:", result);

  
    if (!result) {
      return this.response.render("pages/clientBookingForm.ejs", {
        type: "create",
        values: this.request.body,
        formErrors: {},
        submitError: true,
      });
    }

    // Storing booking data in session for summary page
    this.request.session.bookingData = {
      ...validationResult.data,
      bookingReference,
      totalPrice,
      bookingId: result.id
    };

    // Success - redirect to booking summary
    return this.response.redirect(303, `/bookingSummary`);
  }
}