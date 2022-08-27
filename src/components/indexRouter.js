import express from 'express';

import productRoute from './product/productRoute.js';
import categoryRoute from './category/categoryRoute.js';

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/product', productRoute);

export default router;