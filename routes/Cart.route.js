const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { ProductModel } = require("../models/Products.model");
const cartRouter = express.Router();


cartRouter.get("/cartItems", async (req, res) => {
    try {
        let cartItems = await CartModel.find();
        res.send(cartItems);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


cartRouter.post("/addcartItem/:id", async (req, res) => {
    const id = req.params.id;
    const item = await ProductModel.findById({ "_id": id });

    try {
        const cartItem = new CartModel({
            brand: item.brand,
            name: item.name,
            weight: item.weight,
            price: item.price,
            mrp: item.mrp,
            ImgSrc: item.ImgSrc,
            category: item.category,
            sasta: item.sasta,
            packet: item.packet,
            offers: item.offers,
            isavailable: item.isavailable,
            quantity: item.quantity
        });
        await cartItem.save();
        res.send("Item added to cart!");
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

cartRouter.patch("/update/:id", async (req,res) => {
    const payload = req.body;
    const id = req.params.id;

    try {
        await CartModel.findByIdAndUpdate({ "_id": id }, payload);
        res.send("Quantity Updated!");
    }
    catch (error) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
})


module.exports = { cartRouter };