import mongoose from "mongoose";
import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Category name must have atleast 5 character']
    }
});

export default db.model('Category', categorySchema);