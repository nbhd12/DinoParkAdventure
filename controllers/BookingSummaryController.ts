import z from "zod";
import { Controller } from "../libs/Controller";

export class BookingSummaryController extends Controller{
    public bookingSummary () {
        this.response.render("pages/clientBookingSummary", {});
    }
}