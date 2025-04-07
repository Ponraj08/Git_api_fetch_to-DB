
import { git_cd_repo } from "../database/entities/entities";
import { AppDataSource } from "../database/ormconfig";
import dotenv from "dotenv";
import { NextFunction } from "express";
import axios from "axios";

dotenv.config();

const gitDataRepository = AppDataSource.getRepository(git_cd_repo);


interface Idatas {
  name: string;
  node_id: string;
  full_name: string;
  html_url: string;
  description: string | null;
}


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


//add datas



dotenv.config();

interface Idatas {
  name: string;
  node_id: string;
  full_name: string;
  html_url: string;
  description: string | null;
}



export const getdatas = async (token:string) => {


  try {
    const response = await axios.get(
      " https://api.github.com/orgs/crystaldelta/repos",

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const datas=response.data.map((data: Idatas) => {
        return {
          name: data.name,
          node_id: data.node_id,
          full_name: data.full_name,
          html_url: data.html_url,
          description: data.description==null?"NULL":data.description,
        };
      });

      return datas
  } catch (err) {
    console.log(err);
  }

};

export async function RunSeed(token:string) {
  console.log("Script Started");



  const datas=await getdatas(token)


    const gitRepository = AppDataSource.getRepository(git_cd_repo);

    for (const data of datas) {
      const alreadyExist = await gitRepository.findOne({
        where: {
          name: data.name,
        },
      });

      console.log(data);

      if (alreadyExist) {
        console.log(`User ${data.name} already exist`);
        continue;
      }
      await gitRepository.save(data);
    }
  

  console.log("Script End");
}


