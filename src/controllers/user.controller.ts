import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const updateUser = async (req: Request, res: Response): Promise<Response> => {

   const user = await getRepository(User).findOne(req.params.id);
   if(user) {
       const rut = user.rut+'';
       getRepository(User).merge(user, req.body);
       user.rut = rut;
       const results = await getRepository(User).save(user);
       return res.json(results);
   }
   return res.status(404).json({msg: 'Not user found'});
}