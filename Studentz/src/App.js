import React from "react";
import "./App.css";
import Header from "./Components/Header";
import AddStudent from "./Components/AddStudent";
import AllStudents from "./Components/AllStudents";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <AllStudents/>
        <AddStudent/> */}
        {/* Use Route instead of Routes */}
        <Routes>
          <Route>
          <Route path="/" exact component = {<AllStudents/>}/>
          <Route path="/add" exact component={<AddStudent/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;