import {request, response, Router} from "express";
import { AdminLoginController } from "../controllers/AdminLoginController";

const adminLoginRouter = Router ();

// Admin Login Page

// Browse
adminLoginRouter.get ("/", (request,response) =>
{const controller = new AdminLoginController (request, response)
    controller.admin();
});

adminLoginRouter.post("/login", (request, response) => {
    const controller = new AdminLoginController(request, response);
    controller.loginSubmission();
});

adminLoginRouter.get("/dashboard", (request, response) => {
    const controller = new AdminLoginController(request, response);
    controller.dashboard();
});


export default adminLoginRouter;