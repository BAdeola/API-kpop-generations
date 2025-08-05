import { Request, Response } from 'express';
import { getIdolService } from '../services/idol-services';

export const getIdol = async (req: Request, res: Response) => {
    const idolData = await getIdolService();
    res.status(200).json(idolData);
};