require("dotenv").config();
const app = require("./src/app");
const ConnectDB = require("./src/db/db");


const dns = require("node:dns");
dns.setServers(['8.8.8.8','1.1.1.1']);


ConnectDB();



app.listen(3000, () => {
    console.log("server is running on port 3000");

})