const express = require("express")
let User = require("../modles/usermodle")
const router = express.Router()

//get api
router.get("/", async (req, res) => {
    const getuser = User
    try {
        const getingUser = await getuser.find()
        res.status(200).json(getingUser)
    } catch (error) {
        res.status(400).json(400)
    }
})
//post api
router.post("/add", async (req, res) => {
    const username = req.body.username;
    const newUser = User({ username })
    try {
        const getUser = await newUser.save()
        if (getUser) {
            res.status(200).json(getUser)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

//delete  with id api
router.delete("/:id", async (req, res) => {
    const delUsers = req.params.id
    try {
        const deleting = User 
        const deleteResult = await deleting.findByIdAndDelete({ _id: delUsers })
        res.send(deleteResult)
        if (deleteResult) {
            res.status(200).json(deleteResult)
        }
    }
    catch (error) {
        res.send(error);
    }
})


//update the user
router.put("/:id", async (req, res) => {
    const update_withId = req.params.id
    const getUser = User
    try {
        const updateUser = await getUser.findByIdAndUpdate({ _id: update_withId }, { $set: req.body })
        if (updateUser) {
            res.status(200).json(updateUser)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router

