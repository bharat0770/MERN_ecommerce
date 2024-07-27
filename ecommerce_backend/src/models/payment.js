    const mongoose = require("mongoose")

const schema = mongoose.schema({
    coupon : {
        type : String, 
        required : [true, "please provide a coupon"], 
        unique : true, 
    },
    discount : {
        type : Number,
        required : [true, "please enter the discount amount"], 
    },
})

const Coupon = mongoose.model("Coupon", schema); 