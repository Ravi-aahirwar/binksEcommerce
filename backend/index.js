
const express = require("express")
const app = express();
const cors = require("cors")

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET);

app.use(express.json());


app.listen(7000, () => console.log("http://localhost:7000"));

const isDev = app.settings.env === "development"
const sucess = isDev ? "http://localhost:5173" : "https://binks-ecommerce.vercel.app"
const cancel = isDev ? "http://localhost:5173" : "https://binks-ecommerce.vercel.app"


const URL = isDev ? "http://localhost:5173" : "https://binks-ecommerce.vercel.app"

app.use(cors({ origin: URL }))

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title,
                images: [product.image],
            },
            unit_amount: product.price * 100,
        },
        quantity: product.amount
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${sucess}/sucess`,
        cancel_url: `${cancel}/cancel`,
    });

    res.json({ id: session.id })
})



