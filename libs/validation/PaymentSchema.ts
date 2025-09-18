import { z } from "zod";

export const paymentSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name is too short")
    .max(75, "Name is too long"),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2]) \/ \d{4}$/, "Expiry date must be in MM / YYYY format"),
  cvv: z
    .string()
    .regex(/^\d{3}$/, "CVV must be 3 digits"),
});
