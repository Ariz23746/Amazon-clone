/* eslint-disable max-len */
const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IvCPeSJuSPGx81f4cXM3MtQM8L9xi73UuRu1BNN9tHcEr7oSyUiJjtFiuAGCC1B0GgwTONUZRr27rFEjrRC1HkG005ay7l2KI");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

// app.get("/",(req,res) => res.status(200).send("hello word"))
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,

  });
});

exports.api = functions.https.onRequest(app);


