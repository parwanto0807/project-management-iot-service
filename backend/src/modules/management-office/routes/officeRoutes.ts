import express from 'express';
import { getOfficeData, createOfficeData } from '../controllers/officeController';

const router = express.Router();

// Route GET untuk mendapatkan data Office
router.get('/', getOfficeData);

// Route POST untuk menambah data Office
router.post('/', createOfficeData);

export default router;
