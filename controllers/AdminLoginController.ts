import z from "zod";
import { Controller } from "../libs/Controller";
import {adminSchema} from "../libs/validation/AdminSchema";

export class AdminLoginController extends Controller{
    public admin (){
        this.response.render("pages/adminLogin", {});
    }
}

// will have admin dashboard page as well