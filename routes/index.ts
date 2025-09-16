import { Router } from "express";
import globalRouter from "./Globals";
import dinosaurRouter from "./Dinosaurs";
import bookingRouter from "./Booking";
import bookingSummaryRouter from "./BookingSummary";
import adminLoginRouter from "./adminLogin";


const router = Router();

router.use (globalRouter);
router.use ("/dinosaurs", dinosaurRouter);
router.use ("/booking", bookingRouter);
router.use ("/bookingSummary", bookingSummaryRouter);
router.use ("/adminLogin", adminLoginRouter);

export default router;   