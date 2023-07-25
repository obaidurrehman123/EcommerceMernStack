import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import productController from "../controller/productController.js";
import formidable from "express-formidable";
import braintree from "braintree";
const {
  createProductController,
  gettingAllProductsController,
  getSingleProductController,
  getProductImageController,
  getDeleteProductController,
  updateProductController,
  productControllerFilter,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} = productController;
const { reqSignIn, adminAccess } = authMiddleware;
const router = express.Router();
router.post(
  "/create-product",
  reqSignIn,
  adminAccess,
  formidable(),
  createProductController
);
router.get("/get-all-products", gettingAllProductsController);
router.get("/get-single-product/:slug", getSingleProductController);
router.get("/get-product-image/:id", getProductImageController);
router.delete("/delete-product/:id", getDeleteProductController);
router.put(
  "/update-product/:id",
  reqSignIn,
  adminAccess,
  formidable(),
  updateProductController
);
router.post("/product-filters", productControllerFilter);
router.get("/product-count", productCountController);
router.get("/product-list/:page", productListController);
router.get("/search-product/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", relatedProductController);
router.get("/product-category/:slug", productCategoryController);
router.get("/braintree/token", braintreeTokenController);
router.post("/braintree/payment", reqSignIn, brainTreePaymentController);
export default router;
