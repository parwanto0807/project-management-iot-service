// src/app.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

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

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
