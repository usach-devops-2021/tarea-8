import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    if(results.affected){
        return res.json({msg: 'USer deleted'});
    }
    return res.status(404).json({msg: 'Not user found'});
}