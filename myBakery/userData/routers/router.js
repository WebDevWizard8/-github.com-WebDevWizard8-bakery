import express from "express";
import { getController, getLogin , placeOrder , getBurgerOrder , getBurger, getPizza ,getSandwich , getPuff ,getBread, getChips, getHome } from "../controllers/getController.js";

const router = express.Router();


router.get('/home',getController);
router.get('/login.html',getLogin);
router.get('/home.html',getHome);
router.get('/burger.html',getBurger);
router.get('/bread.html',getBread);
router.get('/pizza.html',getPizza);
router.get('/sandwich.html',getSandwich)
router.get('/chips.html',getChips)
router.get('/puff.html',getPuff)
router.get('/order.html',getBurgerOrder)
router.post('/placeOrder',placeOrder);

export {router};