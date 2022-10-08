const express = require("express")
const Exercise = require("../modles/exercisemodle")


const router = express.Router()

//get exercise Api
router.get("/", async (req, res) => {
    const getExer = Exercise
    try {
        const findExer = await getExer.find()
        if (findExer) {
            res.status(200).json(findExer)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

//post exercise api
// router.post("/exer", async (req, res) => {
//     const username = req.body.username;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date)
//     const newExer = Exercise({ username, description, duration, date })
//     try {
//         const postingExer = await newExer.save()
//         if (postingExer) {
//             res.status(200).json(postingExer)
//         }
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

//delete exercise  api
router.delete("/:id", async (req, res) => {
    const del_with_id = req.params.id
    const delExer = Exercise 
    try {
        const deletingExer = await delExer.findByIdAndDelete({ _id: del_with_id })
        if (deletingExer) {
            res.status(200).json(deletingExer)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})
//updateexercise api
router.put("/:id", async (req, res) => {
    const update_with_id = req.params.id
    const newExer = Exercise
    try {
        const upExer = await newExer.findByIdAndUpdate({ _id: update_with_id }, { $set: req.body })
        if (upExer) {
            res.status(200).json(upExer)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

// router.post("/exer", (req, res) => {
//     const username = req.body.username;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date)

//     const newExercise = new Exercise({ username, description, duration, date });
//     newExercise.save()
//         .then(() => res.json("Exercise Added"))
//         .catch((err) => res.status(400).json("Error", err))
// })
module.exports = router