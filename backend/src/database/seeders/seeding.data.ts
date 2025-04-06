import { git } from "../entities/entities";
import { AppDataSource } from "../ormconfig";
import axios from "axios";
import * as dotenv from "dotenv";

import { NextFunction, request, Request, response, Response } from "express";

dotenv.config();

interface Idatas {
  name: string;
  node_id: string;
  full_name: string;
  html_url: string;
  description: string | null;
}

const Code = async (_req: Request, res: Response) => {
  try {
    console.log("process env code url", process.env.CODE_URL);

    if (process.env.CODE_URL) {
      console.log(
        "process env code url inside the try block",
        process.env.CODE_URL
      );

      res.redirect(process.env.CODE_URL);
      
    }
  } catch (err) {
    console.log(err);
  }
};

const getToken = () => {
  try {
  } catch {}
};

// const getdatas = async () => {
//   const auth =
//   process.env.TOKEN;

//   try {
//     const response = await axios.get(
//       " https://api.github.com/orgs/crystaldelta/repos",

//       {
//         headers: {
//           Authorization: `Bearer ${auth}`,
//         },
//       }
//     );

//     const datas=response.data.map((data: Idatas) => {
//         return {
//           name: data.name,
//           node_id: data.node_id,
//           full_name: data.full_name,
//           html_url: data.html_url,
//           description: data.description==null?"NULL":data.description,
//         };
//       });

//       return datas
//   } catch (err) {
//     console.log(err);
//   }

// };

async function RunSeed() {
  console.log("Script Started");

  Code(request, response);

  // await AppDataSource.initialize();

  // console.log("Db initialized");

  // const datas=await getdatas()

  // if (AppDataSource.isInitialized) {
  //   const gitRepository = AppDataSource.getRepository(git);

  //   for (const data of datas) {
  //     const alreadyExist = await gitRepository.findOne({
  //       where: {
  //         name: data.name,
  //       },
  //     });

  //     console.log(data);

  //     if (alreadyExist) {
  //       console.log(`User ${data.name} already exist`);
  //       continue;
  //     }
  //     await gitRepository.save(data);
  //   }
  // }

  console.log("Script End");
}

RunSeed();
