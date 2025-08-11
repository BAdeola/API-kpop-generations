import { noContent, notFound, ok } from "../utils/http-helper";
import * as GroupRepository from "../repositories/groups-repository";
import { GroupModel } from "../models/group-model";

export const getGroupsListService = async () => {
    const groups = await GroupRepository.getGroupList();
    return ok(groups);
};

export const getGroupByIdService = async (id: number) => {
    const group = await GroupRepository.getGroupById(id);
    return group ? ok(group) : notFound("Group not found");
};

export const insertGroupService = async (generationId: number, groupData: GroupModel) => {
    const newGroup = await GroupRepository.insertGroup(generationId, groupData);
    return ok(newGroup);
};

export const deleteGroupByIdService = async (id: number, generationId: number) => {
    await GroupRepository.deleteGroupById(id);
    return noContent(null);
};