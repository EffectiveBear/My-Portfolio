const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();

//CONNECTION TO DATABASE


//MIDDLEWARES
app.use(express.json());
app.use(cors({
    // origin: "https://ashutosh-dahal.netlify.app",
}))
app.use("/api", require("./Routes/userRoutes"));

// ALLOWING CUSTOM HEADERS


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})