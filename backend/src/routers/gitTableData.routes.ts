import { Router } from "express";
import { GitTableDataController } from "../controller/gittabledata.controller";
import { Request, Response } from "express";
import { v6 } from "uuid";
import { parse, stringify } from "querystring";
import { getdatas, RunSeed } from "../database/seeders/seeding.data";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const router = Router();

const userController = new GitTableDataController();



router.get('/getDatas',userController.getdata)
router.delete("/deletdatas/:id" ,userController.deletedata);
router.put("/updatedatas/:id",userController.updatedata);



router.get("/github", async (req: Request, res: Response): Promise<void> => {
    const query = {
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        state: v6()
    }
    const tokenUrl = `https://github.com/login/oauth/authorize?${stringify(query)}`
    res.redirect(tokenUrl)
})
router.get("/ponraj", async (req: Request, res: Response): Promise<void> => {
    const response = await axios({
        url: 'https://github.com/login/oauth/access_token',
        method: "POST",
        data: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: req.query.code,
            redirect_uri:  process.env.REDIRECT_URI
        }
    })
    res.json(parse(response.data))
    const token = response.data.split("=")[1].split("&")[0];

    console.log(token)
    await RunSeed(token);
})