import { Request, Response } from 'express';
import * as IdolService from '../services/idol-services';

export const getIdols = async (req: Request, res: Response) => {
    const HttpResponse = await IdolService.getIdolService();

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const getIdolById = async (req: Request, res: Response) => {
    const idolId = parseInt(req.params.id);
    const HttpResponse = await IdolService.getIdolByIdService(idolId);

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const insertIdol = async (req: Request, res: Response) => {
    const idolData = req.body;
    const groupID = req.body.groupId || req.params.groupId;
    const HttpResponse = await IdolService.insertIdolService(groupID, idolData);

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const deleteIdolById = async (req: Request, res: Response) => {
    const idolId = parseInt(req.params.id);
    const groupId = parseInt(req.params.groupId);
    const HttpResponse = await IdolService.deleteIdolByIdService(groupId, idolId);

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export function getGroupsList(arg0: string, getGroupsList: any) {
    throw new Error("Function not implemented.");
}
