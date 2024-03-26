import asyncHandler from 'express-async-handler';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
}); 

// @desc    Fetch a product by ID
// @route   GET /api/products/:id
// @access  Public

const getProductById = asyncHandler(async (req, res) => {
    const   product = await Product.findById(req.params.id); 
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { getProduct, getProductById };