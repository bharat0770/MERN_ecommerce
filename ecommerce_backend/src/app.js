const express = require( 'express');
const  {connectDB}  = require( './util/features.js');

// const upload = require('./middlewares/multer.js');
// const  newUser = require('./controllers/user.js');


//? importing  routes
const  userRoute = require('./routes/user.js');
const  productRoute = require('./routes/product.js');
const orderRoute = require("./routes/order.js");
const port = 4000;
const app = express();
app.use(express.json());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/order', orderRoute);

// app.post('/file/upload',upload.single("file"),(req, res)=>{
//     res.    send("uploads working properly");
// })

app.get('/', (req, res) => {
    res.send("working with /api/v1");
});



// error middlware 
app.use((err, req, res, next)=>{
    return res.status(err.statusCode ?? 500).json({
        success : false, 
        message : err.message ? err.message : "invalid reques"
    });
})



app.listen(port, async () => {
    try {
        await connectDB();
        console.log(`express is working on http://localhost:${port}`);
    }
    catch (error) {
        console.log('Error while connecting db', error);
    }
});

