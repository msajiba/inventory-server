const Category = require('../models/category.model');
const {
    v4: uuidv4
} = require('uuid');

const getAllCategory = async (req, res) => {
    const category = await Category.find({});
    res.status(200).send(category)
};

const createCategory = async (req, res) => {
    try {
        const {
            name,
            code
        } = req.body;

        const exist = await Category.findOne({
            name: name
        });
        if (exist) {
            return res.status(401).json({
                status: false,
                message: 'already have a category'
            })
        }
        const newCat = new Category({
            id: uuidv4(),
            name: name,
            code: code
        })
        await newCat.save();
        res.status(200).send({
            status: true,
            message: 'Category add successfully'
        });
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const deleteCategory = async (req, res) => {
    const id = req.params.id;
    const filter = {
        id: id
    };
    const result = await Category.deleteOne(filter);
    res.status(202).send({
        status: true,
        message: 'category delete successfully'
    });
}

module.exports = {
    getAllCategory,
    createCategory,
    deleteCategory
}