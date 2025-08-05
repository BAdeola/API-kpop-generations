import { Router } from "express";
import { getIdol } from "./controllers/idols-controlle";

const router = Router();

router.get('/idol', getIdol);

export default router;