import Category from '../../models/categoryModel.js';

const readAllCategoryService = async () => {
    try {
        return await Category.find();
    } catch (err) {
        throw err;
    }
};

const readCategoryService = async (categoryId) => {
    try {
        return await Category.findById(categoryId);
    } catch (err) {
        throw err;
    }
};

const createCategoryService = async ( content ) => {
    const category = new Category(content);
    try {
        return await category.save();
    } catch (err) {
        throw err;
    }
};

const updateCategoryService = async (categoryId, content) => {
    try {
        return await Category.findByIdAndUpdate(categoryId, content, {new: true});
    } catch (err) {
        throw err;
    }
};

const deleteCategoryService = async (categoryId) => {
    try {
        return await Category.findByIdAndDelete(categoryId);
    } catch (err) {
        throw err;
    }
};

export {readAllCategoryService, readCategoryService, createCategoryService, updateCategoryService, deleteCategoryService};