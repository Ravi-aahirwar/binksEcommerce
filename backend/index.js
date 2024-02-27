
const express = require("express")
const app = express();
const cors = require("cors")

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET);

app.use(express.json());
// app.use(cors({
//     origin:" http://localhost:5173/"
// }))

app.listen(7000, () => console.log("https://binks-ecommerce-backend.vercel.app/"));

app.post("/api/create-checkout-session", async (req, res) => {
    const  {products}  = req.body

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title,
                images:[product.image],
            },
            unit_amount: product.price * 100,
        },
        quantity: product.amount
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/sucess",
        cancel_url: "http://localhost:5173/cancel",
    });

    res.json({id: session.id})
})



