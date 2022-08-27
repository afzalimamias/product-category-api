import { Router } from "express";

import { readAllProduct, createProduct, readProduct, updateProduct, deleteProduct } from "./productController.js";

const router = Router();

router.get('/readAll', readAllProduct);

router.post('/create', createProduct);

router.get('/read/:productId', readProduct);

router.patch('/update/:productId', updateProduct);

router.delete('/delete/:productId', deleteProduct);

export default router;