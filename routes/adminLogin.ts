import {request, response, Router} from "express";
import { AdminLoginController } from "../controllers/AdminLoginController";

const adminLoginRouter = Router ();

// Admin Login Page

// Browse
adminLoginRouter.get ("/", (request,response) =>
{const controller = new AdminLoginController (request, response)
    controller.admin();
});

export default adminLoginRouter;