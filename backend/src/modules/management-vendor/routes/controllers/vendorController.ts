import { Request, Response } from 'express';

export const getVendorData = (req: Request, res: Response) => {
  res.json({ message: 'Menampilkan data vendor' });
};

export const createVendorData = (req: Request, res: Response) => {
  const { name, contact } = req.body;
  res.json({ message: `Vendor ${name} berhasil dibuat dengan kontak ${contact}` });
};
