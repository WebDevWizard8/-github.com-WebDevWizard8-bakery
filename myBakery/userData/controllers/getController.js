import path from "path";
import {createBakeryService} from "../services/bakeryService.js"
import { bakeryModel } from "../models/bakeryModel.js";
import bodyParser from "body-parser";

let getController = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','home.html'))
};

let getSandwich = (req,res)=>{
  res.sendFile(path.join(process.cwd(),'views','sandwich.html'))
};

let getBread = (req,res)=>{
  res.sendFile(path.join(process.cwd(),'views','bread.html'))
};
let getBurger = (req,res)=>{
  res.sendFile(path.join(process.cwd(),'views','burger.html'));
}

let getPizza = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','pizza.html'));
  }

  let getHome = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','home.html'));
  }

  let getLogin = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views,login.html'))
  }
  let getChips = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','chips.html'))
  }

  let getPuff = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','puff.html'));
  }

let getBurgerOrder = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','order.html'))
}
const placeOrder = async(req,res)=>{
    let{ConfirmItemName,quantity,Address,City,pinCode} = req.body
    console.log(req.body);

    let status = await createBakeryService(ConfirmItemName,quantity,Address,City,pinCode)

    if (status == 'success') {
        res.sendFile(path.join(process.cwd(),'views','successfully.html'));
    }else{res.send(`error occured`)}
}
export {getController,getLogin,placeOrder,getBurgerOrder,getBurger,getPizza,getPuff,getBread,getSandwich,getChips,getHome};