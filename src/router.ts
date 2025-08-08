import { Router } from "express";
import { getIdols } from "./controllers/idols-controller";

const router = Router();

router.get('/group', getIdols);

export default router;