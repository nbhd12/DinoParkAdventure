import {request, response, Router} from "express";
import { PaymentController } from "../controllers/PaymentController";

const paymentController = Router ();

paymentController.get ("/", (request, response) =>
    {const controller = new PaymentController(request, response);
        controller.payment();
    });
    
export default paymentController;