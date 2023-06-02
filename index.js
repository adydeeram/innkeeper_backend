const http = require("http");
const app = require("./src/app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4200;
const server = http.createServer(app);

const MONGO_URL =
  "mongodb://admin:admin@ac-fxunlzl-shard-00-00.fdswl6p.mongodb.net:27017,ac-fxunlzl-shard-00-01.fdswl6p.mongodb.net:27017,ac-fxunlzl-shard-00-02.fdswl6p.mongodb.net:27017/?ssl=true&replicaSet=atlas-3pzw70-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
})
mongoose.connection.once('error', () => {
  console.log('MongoDB connection error!');
})

const startServer = async () => {
   await mongoose.connect(MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
   })

  server.listen(PORT, () => {
    console.log(`Listing to port on ${PORT}`);
  });
};

startServer();
