import {Routes, Route ,Link } from "react-router-dom"
import './App.css';
import React from 'react';
// import index from "./pages/studentsjourney";
import Home from "./pages/Studentsjourney/Home";
import Add from "./pages/Studentsjourney/Add";
import Edit from "./pages/Studentsjourney/Edit";
import MentorHome from "./pages/mentorjourney/MentorHome";
import MentorAdd from "./pages/mentorjourney/MentorAdd";
import MentorEdit from "./pages/mentorjourney/MentorEdit";


function App() {
  return (
    <div className="App">
   
      <div className="Navbar">
       <Link to='/' >

       </Link>
       
        <h1>Student-Teacher Management</h1>
        </div>

         <div className='totalcontent'>
          <div className='sidebar'>
            <nav>
              <ul>
                <li>
                  <Link style={{textDecoration:"none"}} to="/students"  className= "btn btn-secondary" >Students Page</Link>
                 </li>
                       <br/>
                  <li>
                  <Link style={{textDecoration:"none"}} to='/mentors'className= "btn btn-secondary"  >Teachers Page</Link>
                  </li>
              </ul>
            </nav>
           
          </div>
          <div className='Contentarea'>
          <Routes>
            <Route path="students" Component={Home}/>
            <Route path="students/create" Component={Add}/>
            <Route path="students/edit" Component={Edit}/>
            <Route path='mentors' Component={MentorHome}/>
            <Route path='mentors/create' Component={MentorAdd}/>
            <Route path='mentors/edit' Component={MentorEdit}/>
          </Routes>

          
          </div>
        </div>

    </div>
  );
}

export default App;