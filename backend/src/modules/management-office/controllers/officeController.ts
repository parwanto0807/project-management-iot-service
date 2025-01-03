import { Request, Response } from 'express';

export const getOfficeData = (req: Request, res: Response) => {
  res.json({ message: 'Menampilkan data office' });
};

export const createOfficeData = (req: Request, res: Response) => {
  const { name, address } = req.body;
  res.json({ message: `Office ${name} berhasil dibuat dengan alamat ${address}` });
};
