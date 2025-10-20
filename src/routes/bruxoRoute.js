import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js'

const routes = Router();

Router.length("/", BruxoController.listarTodos);



export default Router;