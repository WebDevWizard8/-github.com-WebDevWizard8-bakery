import {bakeryModel} from "../models/bakeryModel.js";

let createBakeryService = async (ConfirmItemName,quantity,Address,City,pinCode)=>{

try {
    let user = new bakeryModel({ConfirmItemName,quantity,Address,City,pinCode})
    let newUser = await user.save()
    return 'success'

} catch (error) {
    console.log(`error occured during insertion`);
    console.log(error);
}
};

export {createBakeryService};