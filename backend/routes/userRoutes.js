import express from 'express';
import router from 'express';
import { getUsers } from '../controllers/userController.js';

const userRoutes = router();

userRoutes.get('/', getUsers);

export default userRoutes;