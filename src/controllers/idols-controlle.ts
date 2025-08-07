import { Request, Response } from 'express';
import { getIdolService } from '../services/idol-services';
import { ok } from '../utils/http-helper';

export const getIdol = async (req: Request, res: Response) => {
    const idolData = await getIdolService();
    
    res.status(idolData.status).json(idolData.body);
};