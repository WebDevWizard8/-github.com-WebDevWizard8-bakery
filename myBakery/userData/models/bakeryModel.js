import mongoose from "mongoose";

let bakerySchema = ({
    ConfirmItemName:String,
    quantity:Number,
    Address:String,
    City:String,
    pinCode:Number
});

const bakeryModel = mongoose.model('userData',bakerySchema);

export {bakeryModel};