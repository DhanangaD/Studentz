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


//http://localhost:8080/student/:id
router.route("/:id").put(async(req, res) => {
    const userId = req.params.id;
    const {name,age,gender} = req.body;  //destructring the body object

    const updateStudent = {
        name,
        age,
        gender
    }
    try {
        const student = await Student.findByIdAndUpdate(userId,updateStudent,{new:true});
        if(!student) return res.status(404).send({status:"No student found with that id"});
        res.status(200).send({status: "Student updated successfully"});
    } catch (error) {
        res.status(400).send("unable to update the database"+error);
    }
})

router.route("/delete/:id").delete(async(req,res) => {
    const userId = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(userId);
        if(!student) return res.status(404).send({status:"No student found with that id"});
        res.status(200).send({status: "Student deleted successfully"});
    } catch (error) {
        res.status(400).send("unable to delete the database"+error);
    }
})

router.route("/get/:id").get(async(req,res) => {
    const userId = req.params.id;
    try {
        const student = await Student.findById(userId);
        if(!student) return res.status(404).send({status:"No student found with that id"});
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send("unable to find the database"+error);
    } 
})

module.exports = router;    //export the router module	