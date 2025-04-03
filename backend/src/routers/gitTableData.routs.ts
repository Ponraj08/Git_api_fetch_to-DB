import { Router } from "express";
import { GitTableDataController } from "../controller/gittabledata.controller";


export const router = Router();

const userController = new GitTableDataController();



router.get('/getDatas',userController.getuser)
router.delete("/deletdatas/:id" ,userController.deleteUser);
router.put("/updatedatas/:id",userController.updateuser);