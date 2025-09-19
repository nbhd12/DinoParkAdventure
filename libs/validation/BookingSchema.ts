import { z } from "zod";


export const bookingSchema = z.object({
  firstName: z.string().min(3, "First name is too short"),
  lastName: z.string().min(3, "Last name is too short"),
  email: z.string().email("Please enter a valid email address"),
  date: z.string()
  .refine((val) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const bookingDate = new Date(val);
    return bookingDate >= today; 
  }, 
  {message: "Booking date must be today or in the future"}),

  vipTicket: z.coerce.number().int().min(0, "Tickets cannot be negative"),
  adultTicket: z.coerce.number().int().min(0, "Tickets cannot be negative"),
  enfantTicket: z.coerce.number().int().min(0, "Tickets cannot be negative"),
  }).refine ((data)=>
  {return (data.vipTicket+ data.adultTicket+data.enfantTicket)>0;}, {message: "Please book minimum 1 ticket"}
)

export type BookingInput = z.infer<typeof bookingSchema>;