import { Router } from "express";
import metasControllers from "../controllers/metas.controllers";
class MetasRouter {
    public router : Router;

    constructor(){
        this.router = Router();
        this.router.get("/lista", metasControllers.getMetas )
        this.router.post("/addmetas",metasControllers.createMetas)
        this.router.put("/setaprobado/:id",metasControllers.setAprobado)
        this.router.put("/setpeticion/:id",metasControllers.setPeticion )
        this.router.put("/deletemetas/:id",metasControllers.deleteMetas)
    }


}


export default new MetasRouter().router;