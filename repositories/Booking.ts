import { Pool } from "pg";
import { Repository } from "../libs/Repository";
import { Booking } from "../models/Booking";


export class bookingRepository extends Repository{  
  
  async create(booking: Booking) { 
    const query = {
    name: "fetch-create-booking",
    text: `
      INSERT INTO bookings (booking_reference, booking_date, total_price, user_id, paid)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    ` ,
    values: [
        booking.getBookingReference(),
        booking.getBookingDate(),
        booking.getTotalPrice(),
        booking.getUserId(),
        booking.getPaid(),
      ],
    };
    
    try {
    const result = await this.pool.query(query);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating booking:", error);
    return null;
  }
}


  // Find by ID
  async findById(id: number) {
  const query = {
  name: "fetch-booking-by-id",
  text: `
      SELECT *
      FROM bookings
      WHERE id = $1
    `,
    values: [id],
  };

  try {
    const result = await this.pool.query(query);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    return null;
  }
}


  // Update booking
async updatePaid(id: number, paid: boolean) {
  const query = {
    name: "update-booking-paid",
    text: `
      UPDATE bookings
      SET paid = $2
      WHERE id = $1
      RETURNING *;
    `,
    values: [id, paid], 
  };

  try {
    const result = await this.pool.query(query);
    return result.rows[0] || null; 
  } catch (error) {
    console.error("Error updating booking paid status:", error);
    return null;
  }
}



  // Optional: find all bookings (for admin)
async findAll() {
  const query = {
    name: "fetch-all-bookings",
    text: `
      SELECT *
      FROM bookings
      ORDER BY booking_date DESC
    `,
    values: [], 
  };

  try {
    const result = await this.pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    return [];
  }
}


}
