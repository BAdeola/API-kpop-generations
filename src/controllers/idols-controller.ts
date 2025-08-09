import { Request, Response } from 'express';
import { getIdolByIdService, getIdolService } from '../services/idol-services';

export const getIdols = async (req: Request, res: Response) => {
    const HttpResponse = await getIdolService();

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const getIdolById = async (req: Request, res: Response) => {
    const idolId = parseInt(req.params.id);
    const HttpResponse = await getIdolByIdService(idolId);

    res.status(HttpResponse.status).json(HttpResponse.body);
};