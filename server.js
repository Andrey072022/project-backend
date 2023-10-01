import mongoose from "mongoose";

import app from "./app.js"

const DB_HOST = "mongodb+srv://Andriy:2008A@cluster0.5nx8ibg.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=AtlasApp"

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
})
.catch(error => {
  console.log(error.message);
  process.exit(1);
})
// 2008A


