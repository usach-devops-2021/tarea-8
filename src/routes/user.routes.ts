import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { getUser, getUsers } from "../controllers/user.controller";
import { updateUser } from "../controllers/user.controller";
import { deleteUser } from "../controllers/user.controller";

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;