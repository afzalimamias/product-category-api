import { AppError, handleResponse } from '../../helper/responseHandler.js';
import catchAsync from "../../helper/catchAsync.js";
import Category from '../../models/categoryModel.js';

const readAllCategory = catchAsync(async (req, res, next) => {
    const data = await Category.find();
    return handleResponse({res, data, result: data.length});
});

const createCategory = catchAsync(async (req, res, next) => {
    const newCategory = new Category(req.body);
    const data = await newCategory.save();
    return handleResponse({res, data});
});

const readCategory = catchAsync(async (req, res, next) => {
    const data = await Category.findById(req.params.categoryId);
    if(!data) {
        return next(new AppError('No category found with this Id', 404));
    }
    return handleResponse({res, data});
});

const updateCategory = catchAsync(async (req, res, next) => {
    const categoryId = req.params.categoryId;
    const content = req.body;
    const data = await Category.findByIdAndUpdate(categoryId, content);
    if(!data) {
        return next(new AppError('No category found with this Id', 404));
    }
    return handleResponse({res, data});
});

const deleteCategory = catchAsync(async (req, res, next) => {
    const data = await Category.findByIdAndDelete(req.params.categoryId);
    if(!data) {
        return next(new AppError('No category found with this Id', 404));
    }
    return handleResponse({res, data});
});

export { readAllCategory, createCategory, readCategory, updateCategory, deleteCategory };