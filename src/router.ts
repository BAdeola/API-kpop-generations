import { Router } from "express";
import * as IdolsControllers from "./controllers/idols-controller";
import * as GroupsControllers from "./controllers/group-controller";
const router = Router();

//members routes
router.get('/idols', IdolsControllers.getIdols);
router.get('/idols/:id', IdolsControllers.getIdolById);
router.post('/idols/:groupId', IdolsControllers.insertIdol);
router.delete('/idols/:id/groupId/:groupId', IdolsControllers.deleteIdolById);

//group routes
router.get('/groups', GroupsControllers.getGroupsList);
router.get('/groups/:id', GroupsControllers.getGroupById);
router.post('/groups/:generationId', GroupsControllers.insertGroup);
router.delete('/groups/:id/generationId/:generationId', GroupsControllers.deleteGroupById);

export default router;