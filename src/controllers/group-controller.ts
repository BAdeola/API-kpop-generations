import { Request, Response } from 'express';
import * as GroupService from '../services/group-services';

export const getGroupsList = async (req: Request, res: Response) => {
    const HttpResponse = await GroupService.getGroupsListService();

    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const getGroupById = async (req: Request, res: Response) => {
    const groupId = parseInt(req.params.id);
    const HttpResponse = await GroupService.getGroupByIdService(groupId);
    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const insertGroup = async (req: Request, res: Response) => {
    const generationId = parseInt(req.params.generationId);
    const groupData = req.body;
    const HttpResponse = await GroupService.insertGroupService(generationId, groupData);
    res.status(HttpResponse.status).json(HttpResponse.body);
};

export const deleteGroupById = async (req: Request, res: Response) => {
    const groupId = parseInt(req.params.id);
    const generationId = parseInt(req.params.generationId);
    // Logic to delete a group by its ID
    res.status(200).json({ message: `Group with ID ${groupId} deleted from generation ${generationId}` });
};