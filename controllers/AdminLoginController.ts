import { Request, Response } from "express";
import { Controller } from "../libs/Controller";
import { AdminRepository } from "../repositories/Admin";
import { adminLoginSchema } from "../libs/validation/AdminSchema";
import z from "zod";

export class AdminLoginController extends Controller {
    private adminRepository: AdminRepository;

    constructor(request: Request, response: Response) {
        super(request, response);
        this.adminRepository = new AdminRepository();
    }

    public admin() {
        this.response.render("pages/adminLogin", {
            type: "login",
            values: {},
            formErrors: {},
            loginError: null,
        });
    }

    public async loginSubmission() {
        const formData = {
            username: this.request.body?.username,
            password: this.request.body?.password,
        };

        const validation = adminLoginSchema.safeParse(formData);

        if (!validation.success) {
            return this.response.status(400).render("pages/adminLogin", { 
                type: "login",                                             
                values: formData,                                          
                formErrors: validation.error.format(),
                loginError: null,                                          
            });
        }

        const exists = await this.adminRepository.findIfExists(
            formData.username,
            formData.password
        );

        if (!exists) {
            return this.response.status(400).render("pages/adminLogin", {
                type: "login",                                             
                values: formData,                                          
                formErrors: {},                                            
                loginError: "Invalid username or password",
            });
        }

        this.request.session.adminId = formData.username;
        this.response.redirect("/adminLogin/dashboard");
    }

  
    public dashboard() {
        if (!this.request.session?.adminId) {
            return this.response.redirect("/adminLogin/");
        }

        this.response.render("pages/adminDashboard", {
            adminUsername: this.request.session.adminId,
        });
    }
} 