import Product from '../../models/productModel.js';

const readAllProductService = async () => {
    try {
        return await Product.find();
    } catch (err) {
        throw err;
    }
};

const createProductService = async (content) => {
    const product = new Product(content);
    try {
        return await product.save();
    } catch (err) {
        throw err;
    }
};

const readProductService = async (productId) => {
    try {
        return await Product.findById(productId);
    } catch (err) {
        throw err;
    }
};

const updateProductService = async (productId, content) => {
    try {
        return await Product.findByIdAndUpdate(productId, content, {new: true});
    } catch (err) {
        throw err;
    }
};

const deleteProductService = async (productId) => {
    try {
        return await Product.findByIdAndDelete(productId);
    } catch (err) {
        throw err;
    }
};

export {readAllProductService, createProductService, readProductService, updateProductService, deleteProductService};