import mongoose from "mongoose";
import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, 'Product must have a name']
    },
    qtyPerUnit: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    unitInStock: {
        type: Number,
        required: true
    },
    discontinued: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
});

export default db.model('Product', productSchema);