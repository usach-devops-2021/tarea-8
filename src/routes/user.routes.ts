import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { getUser, getUsers } from "../controllers/user.controller";

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);

export default router;