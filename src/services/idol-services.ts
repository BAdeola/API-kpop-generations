import { noContent, notFound, ok } from "../utils/http-helper";

export const getIdolService = async () => {
    const idolData = { name: "Sample Idol", group: "Sample Group" };

    if (!idolData) {
        return notFound({ error: "Idol not found" });
    } else if (Object.keys(idolData).length === 0) {
        return noContent(idolData);
    } else {
        return ok(idolData);
    }
};
