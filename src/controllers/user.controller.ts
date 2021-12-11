import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const createUser = async (req: Request, res: Response): Promise<Response> => {

   const newUser =  getRepository(User).create(req.body);
   const result = await getRepository(User).save(newUser);
   return res.status(201).json(result);
}