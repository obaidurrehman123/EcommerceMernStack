import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        success: false,
        message: "Name is requires",
      });
    }
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }
    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new Category Created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Category",
    });
  }
};
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      category,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in update category",
    });
  }
};
export const getAllCategoriesController = async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    res.status(200).send({
      success: true,
      category,
      message: "Category Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting category",
    });
  }
};
export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await CategoryModel.findOne({ slug });
    res.status(200).send({
      success: true,
      category,
      message: "Single Category Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting single category",
    });
  }
};
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      category,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in deleting category",
    });
  }
};
export default {
  createCategoryController,
  updateCategoryController,
  getAllCategoriesController,
  getSingleCategoryController,
  deleteCategoryController,
};
