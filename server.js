require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json()); // use of json data

app.use("/api/products", productRoutes);

require("mongoose")
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
);
