import { z } from "zod";

const currentYear = new Date().getFullYear();

export const bookingSchema = z.object({
  title: z
    .string()
    .min(3, "Titre trop court (minimum 3 caractères)")
    .max(50, "Titre trop long (maximum 50 caractères)"),

})