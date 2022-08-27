import {AppError, handleResponse } from "../../helper/responseHandler.js";
import catchAsync from "../../helper/catchAsync.js";
import Product from "../../models/productModel.js";

const readAllProduct = catchAsync(async (req, res, next) => {
    const data = await Product.find();
    return handleResponse({res, data, result: data.length});
});

const createProduct = catchAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    const data = await newProduct.save();
    return handleResponse({res, data});
});

const readProduct = catchAsync(async (req, res, next) => {
    const data = await Product.findById(req.params.productId);
    if(!data) {
        return next(new AppError('No product found with this Id', 404));
    }
    return handleResponse({res, data});
});

const updateProduct = catchAsync(async (req, res, next) => {
    const productId = req.params.productId;
    const content = req.body;
    const data = await Product.findByIdAndUpdate(productId, content, {new: true});
    if(!data) {
        return next(new AppError('No product found with this Id', 404));
    }
    return handleResponse({res, data});
});

const deleteProduct = catchAsync(async (req, res, next) => {
    const data = await Product.findByIdAndDelete(req.params.productId);
    if(!data) {
        return next(new AppError('No product found with this Id', 404));
    }
    return handleResponse({res, data});
});

export { readAllProduct, createProduct, readProduct, updateProduct, deleteProduct };