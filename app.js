const express = require('express');
const cors = require('cors');
const app = express();
require('./config/db.config');


//All Router  Import 
const productRouter = require('./routers/product.route');
const userRouter = require('./routers/user.route');
const categoryRouter = require('./routers/category.route');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//ALL api 

app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);


//For testing api
app.get('/', (req, res) => {
    res.json({
        message: 'hello inventory'
    });
})

//Router error handle 
app.use((err, req, res) => {
    res.status(400).json({
        message: 'Route not found'
    })
});

//Server Error handle 
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Server Broken'
    })
});


module.exports = app;