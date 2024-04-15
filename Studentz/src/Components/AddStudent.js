import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGender, setStudentGender] = useState("");

  function saveStudent() {
    const newStudent = {
      name: studentName,
      age: studentAge,
      gender: studentGender,
    };
    console.log("newStudent data: ", newStudent);

    axios("http://localhost:3000/students/add", saveStudent)
      .then((response) => {
        console.log("response data: ", response);
        alert("Student added successfully");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  return (
    <div className="container p-5 bg-body rounded-3">
      <form onSubmit={saveStudent}>
        <div className="p-3 mb-2">
          <div className="form-group">
            <label for="name" className="form-label">
              Student Name :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName" 
              placeholder="Enter Student Name"
              onChange={(event) => {
                setStudentName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="age" className="form-label">
              Student Age :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="studentAge"
              placeholder="Enter Student Age"
              onChange={(event) => {
                setStudentAge(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="gender" className="form-label">
              Student Gender :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="studentGender"
              placeholder="Enter Student Gender"
              onChange={(event) => {
                setStudentGender(event.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
