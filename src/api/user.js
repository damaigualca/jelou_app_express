import { Router } from 'express';
const router = Router();
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/userController.js';

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


export default router;
