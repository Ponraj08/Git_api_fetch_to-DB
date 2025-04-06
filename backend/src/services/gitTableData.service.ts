import { git_cd_repo } from "../database/entities/entities";
import { AppDataSource } from "../database/ormconfig";
import dotenv from "dotenv";
import { NextFunction } from "express";
// import { Iuser } from "../interfaceses";

dotenv.config();

const gitDataRepository = AppDataSource.getRepository(git_cd_repo);


//view all users

export const viewing = async () => {
  const datas = await gitDataRepository.find();
  return datas;
};

//update users


export const updating = async (
  id: string,
  name: string,
  node_id: string,
  full_name: string,
  html_url: string,
  description: string|null,
  next: NextFunction
) => {
  const ID = parseInt(id);
  const currentDatas = await gitDataRepository.findOneBy({ id: ID });

  if (!currentDatas) {
      const error: any = new Error("User not found");
      error.status = 404;
      return next(error); 
  }

  const newUserData = {
      ...currentDatas,
      name: name || currentDatas.name,
      node_id: node_id || currentDatas.node_id,
      full_name: full_name || currentDatas.full_name,
      html_url: html_url || currentDatas.html_url, 
      description: description|| currentDatas.description,

  };

  await gitDataRepository.update({ id: ID }, newUserData);

  return newUserData;
};

//delete users

export const deleting = async (id: string) => {
  const ID = parseInt(id);
  const currentUser = await gitDataRepository.delete({ id: ID });
  return currentUser;
};
