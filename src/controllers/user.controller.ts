import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).find();
    return res.json(results);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if(user){
        return res.json(user);
    }
    return res.status(404).json({msg: 'Not user found'});
}