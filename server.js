const express = require("express")
const port = process.env.PORT || 5000
const mongoose = require("mongoose")
const exerciseRoute = require("./routes/exerciseRoutes")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")

require("dotenv").config();


const app = express()
app.use(express.json())
app.use(cors())

//connections
const uri = process.env.DB_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connection is connected successfuly"))
    .catch((error) => console.log(error))
//end connectin

//external route
app.use("/exercises", exerciseRoute)
app.use("/users", userRoutes)



//listining
app.listen(port, () => {
    console.log(`server is listining on port ${port}`);
})
