import { NextFunction, Request, Response } from "express";

import { deleting, updating, viewing } from "../services/gitTableData.service";

export class GitTableDataController {
  async getuser(req: Request, res: Response) {
    const view = await viewing();
    res.json(view);
    return;
  }

  async updateuser(req: Request, res: Response, next: NextFunction) {
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

  async deleteUser(req: Request, res: Response) {
    console.log("enter");
    const deleted = await deleting(req.params.id);
    res.status(200).json("deleted successfully");
    return;
  }
}

export const getCode = async (req: Request, res: Response): Promise<any> => {
  console.log(req.query.code);
  console.log(typeof req.query.code);
  return req.query.code;
};
