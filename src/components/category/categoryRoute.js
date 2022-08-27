import { Router } from "express";

import { readAllCategory, createCategory, readCategory, updateCategory, deleteCategory } from "./categoryController.js";

const router = Router();

router.get('/readAll', readAllCategory);

router.post('/create', createCategory);

router.get('/read/:categoryId', readCategory);

router.patch('/update/:categoryId', updateCategory);

router.delete('/delete/:categoryId', deleteCategory);

export default router;