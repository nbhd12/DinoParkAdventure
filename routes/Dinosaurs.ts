import { request, response, Router } from "express";
import { DinosaurController } from "../controllers/DinosaurController";

const dinosaurRouter = Router ();

// Dinosaur Listing Page

//Browse
dinosaurRouter.get ("/", (request, response) =>
{ const controller = new DinosaurController(request,response);
    controller.browsedinosaur();
}
);

export default dinosaurRouter;