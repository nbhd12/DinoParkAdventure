import { bookingSchema } from "../../libs/validation/BookingSchema";

const form = document.getElementById("bookingForm") as HTMLFormElement;
const vip = document.getElementById("vip") as HTMLInputElement;
const adultInput = document.getElementById("adult") as HTMLInputElement;
const enfantInput = document.getElementById("enfant") as HTMLInputElement;
const totalPriceEl = document.getElementById("totalPrice") as HTMLElement;