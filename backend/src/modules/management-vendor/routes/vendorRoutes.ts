import express from 'express';
import { getVendorData, createVendorData } from '../routes/controllers/vendorController';

const router = express.Router();

// Route GET untuk mendapatkan data Vendor
router.get('/', getVendorData);

// Route POST untuk menambah data Vendor
router.post('/', createVendorData);

export default router;
