export interface BookingRow{}

export class Booking {
    protected id: number | null;
    protected booking_reference: string;
    protected booking_date: string;
    protected total_price: number;
    protected user_id: number;
    protected paid: boolean;

    constructor(
    id: number | null,
    booking_reference: string,
    booking_date: string,
    total_price: number, 
    user_id: number,
    paid: boolean = false
  ) {
    this.id = id;
    this.booking_reference = booking_reference;
    this.booking_date = booking_date;
    this.total_price = total_price;
    this.user_id = user_id;
    this.paid = paid;
  }

  getId = () => {
    return this.id;
  }

  getBookingReference = () => {
    return this.booking_reference;
  }

  getBookingDate = () => {
    return this.booking_date;
  }

  getTotalPrice = () => {
    return this.total_price;
  }

  getUserId = () => {
    return this.user_id;
  }

  getPaid = () => {
    return this.paid;
  }


}