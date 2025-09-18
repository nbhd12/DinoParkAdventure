import { Controller} from "../libs/Controller";
import { paymentSchema } from "../libs/validation/PaymentSchema";
import { z } from "zod";
import { bookingRepository } from "../repositories/Booking";


export class PaymentController extends Controller {

  public async showPayment() {
    const bookingId = this.request.params.id;
    const repository = new bookingRepository();
    const booking = await repository.findById(bookingId);

    if (!booking) {
      return this.response.render("booking/error.ejs", {
        message: "Booking not found",
      });
    }

    this.response.render("booking/payment.ejs", {
      values: {},
      formErrors: {},
      booking: booking,
    });
  }

  // Handle payment submission
  public async submitPayment() {
    const bookingId = this.request.params.id;
    const repository = new bookingRepository();
    const booking = await repository.findById(bookingId);

    if (!booking) {
      return this.response.render("booking/error.ejs", {
        message: "Booking not found",
      });
    }


    const validationResult = paymentSchema.safeParse(this.request.body);

    if (!validationResult.success) {
      const formErrors = z.treeifyError(validationResult.error);

      return this.response.render("booking/payment.ejs", {
        values: this.request.body,
        formErrors: formErrors.properties,
        booking: booking,
      });
    }

    await repository.update(bookingId, { paid: true });

    return this.response.redirect(303, `/booking/${bookingId}/summary`);
  }
}
