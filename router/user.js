const express = require('express')
const router = express.Router()
const User = require('./model/schema')
const bcrypt = require('bcryptjs')
const schema = require("./model/query")
const { graphql } = require('graphql');


// router.get("/get" , (req,res)=> {
//     res.send({
//         message : "Kamal Uddin"
//     })
// })



router.get("/graphqlget", (req, res) => {
    const schemaQuery = "{ users { name ,email ,id} }";
    const query = `query ${schemaQuery}`;
    graphql(schema, schemaQuery, query)
        .then((response) => {
            res.send(response);
        }).catch((error) => {
            res.send(error);
        })
})

router.get("/get/:id", (req, res) => {
    console.log(typeof (req.params.id))
    const schemaQuery = `{ user (id : ${req.params.id}) { name ,email ,id } }`;
    const query = `query ${schemaQuery}`;
    graphql(schema, schemaQuery, query)
        .then((response) => {
            res.send(response);
        }).catch((error) => {
            res.send(error);
        })

})



// mongodb   
router.get("/get", async (req, res) => {
    const user = await User.find();
    res.send({
        AllTodo: user
    })
})


router.post('/SaveTodo', async (req, res) => {
    try {
        const addTask = new User(req.body)
        await addTask.save()
        res.status(200).send({ message: 'Task succesfully added!' })
    } catch (e) {
        res.status(400).send({ message: e.message })
    }
})

router.delete("/DeleteTodo", async (req, res) => {
    console.log(req.body)
    await User.findOneAndDelete(req.body).then(() => {
        res.send({
            message: "Delete Succesfully"
        })
    }).catch((err) => {
        res.send({
            err: err
        })
    })
})


router.put("/UpdateTodo/:id", async (req, res) => {
    console.log(req.body.updatename)
    await User.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        age: req.body.age,
    })
        .then(() => {
            res.send({
                message: "Update Succesfully"
            })
        }).catch((err) => {
            res.send({
                err: err
            })
        })
})




// router.post("/deleteall", async (req, res) => {
//     console.log(req.body)
// await User.remove()

// .then(()=>{
// res.send({
//     message: "Delete All Succesfully"
// })
// }).catch((err)=> {
//     res.send({
//         err : err
//     })
// })
// })


// function hashPassword(password){
//     var salt = bcrypt.genSaltSync(10)
//     var hash = bcrypt.hashSync(password,salt);
//     return hash
// }





module.exports = router