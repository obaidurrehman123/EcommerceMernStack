import express from "express";
import authController from "../controller/authController.js";
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} = authController;
import authMiddleware from "../middleware/authMiddleware.js";
const { reqSignIn, adminAccess } = authMiddleware;
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.get("/test", reqSignIn, adminAccess, testController);
router.get("/user-auth", reqSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", reqSignIn, adminAccess, (req, res) => {
  res.status(200).send({ ok: true });
});
router.put("/profile", reqSignIn, updateProfileController);
export default router;
