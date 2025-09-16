import { request, response, Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

const globalRouter = Router ();

// HomePage
globalRouter.get ("/", (request, response) =>
{ const controller = new GlobalsController(request,response);
    controller.homepage();
}
);

export default globalRouter;