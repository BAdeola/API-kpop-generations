import { noContent, notFound, ok } from "../utils/http-helper";
import * as IdolRepository from "../repositories/idols-repository";

export const getIdolService = async () => {
    const idolsData = await IdolRepository.getMemberList(202);

    if (!idolsData) {
        return notFound({ error: "Idol not found" });
    } else if (idolsData.length === 0) {
        return noContent(idolsData);
    } else {
        return ok(idolsData);
    }
};

export const getIdolByIdService = async (idolId: number) => {
    const idolData = await IdolRepository.getMemberById(idolId);

    if (!idolData) {
        return notFound({ error: "Idol not found" });
    } else {
        return ok(idolData);
    }
};

export const insertIdolService = async (groupID: number, idolData: any) => {
    const newIdol = await IdolRepository.insertMember(groupID, idolData);

    if (newIdol === null) {
        return notFound({ error: "Idol not found" });
    } else {
        return ok(newIdol);
    }
};