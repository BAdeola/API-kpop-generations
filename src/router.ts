import { Router } from "express";
import * as IdolsControllers from "./controllers/idols-controller";

const router = Router();

router.get('/idols', IdolsControllers.getIdols);
router.get('/idols/:id', IdolsControllers.getIdolById);

export default router;