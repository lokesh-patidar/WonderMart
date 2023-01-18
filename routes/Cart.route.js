const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { ProductModel } = require("../models/Products.model");
const cartRouter = express.Router();


cartRouter.get("/data", async (req, res) => {
    try {
        let products = await CartModel.find();
        res.send(products);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


cartRouter.post("/add/:id", async (req, res) => {
    const id = req.params.id;
    const item = await ProductModel.findById({ "_id": id });
    
    try {
        const cartItem = new CartModel(item);
        await cartItem.save();
        // res.send("Item added to cart!");
        res.send(cartItem);
    }
    catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


cartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await CartModel.findByIdAndDelete({ "_id": id });
        res.send("Cart Item Deleted!");
    } catch (error) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});



module.exports = { cartRouter };