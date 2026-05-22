import { Router } from "express";
import { ActivitieController } from "../controllers/administrator/AdministratorActivitieController";
import { ClassControllers } from "../controllers/administrator/AdministratorClassControllers";
import { UserControllers } from "../controllers/administrator/AdministratorUserControllers";
import { SubjectController } from "../controllers/administrator/AdmnistratorSubjectController";
import { PermissionController } from "../controllers/administrator/AdministratorPermissionController";
import { AuthUser } from "../middlewers/userAuth";
import { UserPermissionController } from "../controllers/administrator/AdministratorUserPermission";

const router = Router();

// Atividades
router.get("/activities/:id", ActivitieController.get);
router.get("/activities", ActivitieController.listActivities);
router.post("/activities", ActivitieController.create);
router.delete("/activities/:id", ActivitieController.delete);

// Classes
router.get("/classes/:id", ClassControllers.get);
router.get("/classes", ClassControllers.listClass);

//user
router.get("/users/:id", UserControllers.get);
router.get("/users", UserControllers.listUsers);
router.post("/users", UserControllers.createUser);

//subjects
router.get("/subject/:id", SubjectController.get);
router.post("/subject", SubjectController.create);

//permissions
router.post('/permission', PermissionController.create);
router.get('/permission/:id', PermissionController.get);

//user permission 
router.get('/userPermission/:id', UserPermissionController.listByUser);
router.get('/userPermission/:id', UserPermissionController.get);

export default router;
