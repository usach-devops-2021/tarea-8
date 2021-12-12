import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const createUser = async (req: Request, res: Response): Promise<Response> => {

   const newUser =  getRepository(User).create(req.body);
   const result = await getRepository(User).save(newUser);
   return res.status(201).json(result);

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
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    if(results.affected){
        return res.json({msg: 'USer deleted'});
    }
    return res.status(404).json({msg: 'Not user found'});
}