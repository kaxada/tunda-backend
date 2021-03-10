require("dotenv").config();
const productsData = require("./data/product");
const Product = require("./models/Product");

require("mongoose")
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Products imported");
    process.exit(); // after data has been imported then exit
  } catch (error) {
    console.error("an error occured. Data not imported");
    process.exit(1);
  }
};

importData();
