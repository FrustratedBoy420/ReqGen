import { Router } from "express";
import {generateProjectPlan,login,logout,registerUser} from "../controller/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router=Router();

router.route("/generateplan").post(verifyJWT,generateProjectPlan);
router.route("/registerUser").post(registerUser);
router.route("/login").post(login);
router.route("/logout").get(verifyJWT,logout);

export default router;