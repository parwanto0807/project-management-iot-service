import { Request, Response } from 'express';

export const getUserData = (req: Request, res: Response) => {
  res.json({ message: 'Menampilkan data user' });
};

export const createUserData = (req: Request, res: Response) => {
  const { username, email } = req.body;
  res.json({ message: `User ${username} berhasil dibuat dengan email ${email}` });
};
