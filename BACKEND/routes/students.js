const router = require("express").Router();	//import the express module
const Student = require("../models/Student");	//import the student model

//http://localhost:8080/student/add
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
   
    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(student => {
        res.json("Student added successfully");
    }).catch(err => {
        res.status(400).send("unable to save to database "+err);
    })

})

//http://localhost:8080/student/
router.route("/").get((req,res) => {
    Student.find()
   .then(students => res.json(students))
   .catch(err => res.status(400).json("Error: "+err))
})

module.exports = router;    //export the router module	