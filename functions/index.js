const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IOJ2rAJvhPHBzKnfxPytGjx5ehBuIQ8cLGWf254jrIlfCMBTd6agYBImgA9gdM3CbwOc0Uppkd9jAkekWnNmeWJ00nwoV7L7B"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

//   console.log("Payment Request Recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-b2eca/us-central1/api



// sk_test_51IOJ2rAJvhPHBzKnfxPytGjx5ehBuIQ8cLGWf254jrIlfCMBTd6agYBImgA9gdM3CbwOc0Uppkd9jAkekWnNmeWJ00nwoV7L7B