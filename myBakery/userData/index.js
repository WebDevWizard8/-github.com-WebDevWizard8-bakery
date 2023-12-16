import  express  from "express";
const app=express();
import {router} from "./routers/router.js"
import { bakeryModel } from "./models/bakeryModel.js";
import { createBakeryService } from "./services/bakeryService.js";
import {dbConnect} from './DB/connection.js'
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

let port = process.env.PORT;
let url = process.env.URL;
let dbName = process.env.DBNAME;


app.use(express.static('public'))

dbConnect(url+dbName);
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json({extended:false}));


app.use('/get',router);


app.listen(port,(req,res)=>{
    console.log(`server started at port ${port}`);
});