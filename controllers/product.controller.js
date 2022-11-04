 const Product = require('../models/product.model');
 const {
     v4: uuidv4
 } = require('uuid');

 const getAllProduct = async (req, res) => {

    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const cursor = await Product.find({});

    let products;
    if(page || size){
        products = cursor.skip(page *10 ).limit(size);
    }
    else{
        products =  cursor;
    }

    console.log(products);
    res.send(products);
     
 };

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



 const productCounter = async (req, res) => {
     const count = await Product.estimatedDocumentCount();
     res.send({
         count
     });
 }


 module.exports = {
     getAllProduct,
     createProduct,
     deleteProduct,
     productCounter
 }