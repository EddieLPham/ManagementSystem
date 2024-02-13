const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database is connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = dbConnect;
