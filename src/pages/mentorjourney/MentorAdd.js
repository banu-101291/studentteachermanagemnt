import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Array from "./mentordata";
import {v4 as uuid} from "uuid";
import {useNavigate} from "react-router-dom"


function MentorAdd(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    let history = useNavigate();
    const handleSubmit = (e) =>{
      e.preventDefault();

      let id = uuid();
      let uniqid = id.slice(0,8)
      let a = name;
      let b = age;
      let c = email;  
      Array.push({id:uniqid ,name:a , age: b , email: c})

      history('/mentors')
    }
     
    return(
      <div>
        <Form className="d-grid-gap-2" style={{margin:"10px"}}>
        <Form.Group className="mb-3" controlId="formname">
            <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e)=> setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formage">
            <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e)=> setAge(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formemail">
            <Form.Control type="text" placeholder="Enter Your Email" required onChange={(e)=> setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handleSubmit(e)} className= "btn btn-secondary">Teacher Add profile</Button>
      </Form> 
      </div>
    )
}
export default MentorAdd;