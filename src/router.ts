import { Router } from "express";
import * as IdolsControllers from "./controllers/idols-controller";

const router = Router();

router.get('/idols', IdolsControllers.getIdols);
router.get('/idols/:id', IdolsControllers.getIdolById);
router.post('/idols', IdolsControllers.insertIdol);
router.delete('/idols/:id', IdolsControllers.deleteIdolById);

export default router;