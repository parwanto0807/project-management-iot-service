import express from 'express';
import { getUserData, createUserData } from './controllers/userController';

const router = express.Router();

// Route GET untuk mendapatkan data User
router.get('/', getUserData);

// Route POST untuk menambah data User
router.post('/', createUserData);

export default router;
