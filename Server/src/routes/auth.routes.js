import { Router } from "express";
import {generateProjectPlan,login,logout,registerUser,getUserProjects} from "../controller/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router=Router();

router.route("/generateplan").post(verifyJWT,generateProjectPlan);
// router.route("/pdf").post(verifyJWT,pdfGenerator);
router.route("/registerUser").post(registerUser);
router.route("/login").post(login);
router.route("/logout").get(verifyJWT,logout);
router.route("/myprojects").get(verifyJWT,getUserProjects);

export default router;