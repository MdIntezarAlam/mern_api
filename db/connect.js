const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connection is connected successfuly"))
    .catch((error) => console.log(error))

