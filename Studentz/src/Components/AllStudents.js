import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/students/")
            .then((response) => {
                setStudents(response.data);
                console.log("response data: ", response.data);
            })
            .catch((error) => {
                console.log("error: ", error);
                alert(error.message);
            });
    }, []);

    return (
        <div>
            <h1>All Students</h1>
        </div>
    )
}