const mongoose = require('mongoose');

const app = require("./index.js");

const port = 4000;
//database connection
const connectionString = "mongodb+srv://Chukwudey:Man_123456@cluster0.lbd63r8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"

try {
  mongoose.connect(connectionString);
  console.log("connected to Mongo");
} catch (error) {
  console.log("did not connect to Mongo");
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })