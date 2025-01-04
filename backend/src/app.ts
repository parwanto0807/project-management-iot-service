import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Muat konfigurasi dari file .env.development
dotenv.config({ path: '.env.development' });

// Buat instance Prisma Client
const prisma = new PrismaClient();

// Import Routes untuk setiap modul
import officeRoutes from './modules/management-office/routes/officeRoutes';
import vendorRoutes from './modules/management-vendor/routes/vendorRoutes';
import userRoutes from './modules/enduser-app/routes/userRoutes';

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Gunakan routes dari setiap modul
app.use('/api/office', officeRoutes);  // Management Office routes
app.use('/api/vendor', vendorRoutes);  // Vendor Management routes
app.use('/api/user', userRoutes);      // End User routes

// Rute contoh untuk menguji koneksi database
app.get('/api/test', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error('Kesalahan saat mengambil data:', err);
    res.status(500).send('Kesalahan server');
  }
});

// Jalankan server
app.listen(port, async () => {
  try {
    await prisma.$connect();
    console.log('Berhasil terhubung ke database');
    console.log(`Server berjalan di http://localhost:${port}`);
  } catch (err) {
    console.error('Gagal terhubung ke database:', err);
  }
});

// Pastikan koneksi Prisma ditutup dengan baik saat server berhenti
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});
