import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import categoryController from "../controller/categoryController.js";
const { reqSignIn, adminAccess } = authMiddleware;
const {
  createCategoryController,
  updateCategoryController,
  getAllCategoriesController,
  getSingleCategoryController,
  deleteCategoryController,
} = categoryController;
const router = express.Router();
router.post(
  "/create-category",
  reqSignIn,
  adminAccess,
  createCategoryController
);
router.put(
  "/update-category/:id",
  reqSignIn,
  adminAccess,
  updateCategoryController
);
router.get("/get-All-category", getAllCategoriesController);
router.get("/get-single-category/:slug", getSingleCategoryController);
router.delete(
  "/delete-category/:id",
  reqSignIn,
  adminAccess,
  deleteCategoryController
);
export default router;
