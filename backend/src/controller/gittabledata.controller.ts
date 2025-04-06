import { NextFunction, Request, Response } from "express";

import { deleting, updating, viewing } from "../services/gitTableData.service";


export class GitTableDataController {
  async getdata(req: Request, res: Response) {
    const view = await viewing();
    res.json(view);
    return;
  }

  async updatedata(req: Request, res: Response, next: NextFunction) {
    const { name, node_id, full_name, html_url, description } = req.body;
    const { id } = req.params;

    const newUserData = await updating(
      id,
      name,
      node_id,
      full_name,
      html_url,
      description,
      next
    );
    res.json(newUserData);
    return;
  }

  async deletedata(req: Request, res: Response) {
    console.log("enter");
    const deleted = await deleting(req.params.id);
    res.status(200).json("deleted successfully");
    return;
  }



}


