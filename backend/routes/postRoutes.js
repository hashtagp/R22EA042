import express from 'express';
import router from 'express';
import { getPosts } from '../controllers/postController.js';

const userRoutes = router();

userRoutes.get('/', getPosts);

export default userRoutes;