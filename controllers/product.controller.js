 const Product = require('../models/product.model');
 const {
     v4: uuidv4
 } = require('uuid');

 const getAllProduct = async (req, res) => {
     const page = parseInt(req.query.page);
     const size = parseInt(req.query.size);
     const products = await Product.find().skip(page * size).limit(size);
     res.send(products);
 };


 const getSingleProduct = async (req, res) => {
     const id = req.params.id;
     const find = {
         id: id
     };
     const product = await Product.findOne(find);
     res.send(product);
 }


 const createProduct = async (req, res) => {
     const {
         name,
         category,
         quantity,
         price,
         sku,
         img
     } = req.body;


     const newProduct = new Product({
         id: uuidv4(),
         name: name,
         category: category,
         quantity: quantity,
         price: price,
         sku: sku,
         image: img
     })
     await newProduct.save();
     res.status(200).json({
         status: true,
         message: 'User is created successfully'
     });
 };


 const deleteProduct = async (req, res) => {
     const id = req.params.id;
     await Product.deleteOne({
         id: id
     });
     res.status(200).send({
         status: true,
         message: 'Product delete success'
     });
 };


 const getCountProduct = async (req, res) => {
     const count = await Product.estimatedDocumentCount();
     res.status(200).json({
         count
     })
 }



 module.exports = {
     getAllProduct,
     createProduct,
     deleteProduct,
     getCountProduct,
     getSingleProduct
 }