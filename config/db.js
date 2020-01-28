const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      createIndexes: true
    });
    console.log("MongoDB Connected.....");
  } catch (err) {
    console.error(err.Message);

    // Exit process with faliure
    process.exit(1);
  }
};

module.exports = connectDB;
