import { Controller } from "../libs/Controller";
import { DinosaurRepository } from "../repositories/Dinosaur";

export class DinosaurController extends Controller {
    public async browsedinosaur () {
        const repo = new DinosaurRepository ();
        const dinos = await repo.findAll(); 
        // console.log ("Dinos from DB:", dinos);

        this.response.render("pages/clientDinoListing", { dinos,

        });
    }
}