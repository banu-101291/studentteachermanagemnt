import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Array from "../Studentsjourney/data";
import {v4 as uuid} from "uuid";
import {useNavigate} from "react-router-dom"


function Add(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [std,setStd] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");

    let history = useNavigate();
    const handleSubmit = (e) =>{
      e.preventDefault();

      let id = uuid();
      let uniqid = id.slice(0,8)
      let a = name;
      let b = age;
      let d = std;
      let f = mobile;
      let c = email;  
      Array.push({id:uniqid ,name:a , age: b , std:d , mobile:f , email: c})

      history('/students')
    }
     
    return(
      <div> 
      <Form className="d-grid-gap-2" style={{margin:"15px"}}>
      <Form.Group className="mb-3" controlId="formname">
          <Form.Control type="text" placeholder="Enter Your Name" required onChange={(e)=> setName(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formage">
          <Form.Control type="text" placeholder="Enter Your Age" required onChange={(e)=> setAge(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formstd">
          <Form.Control type="text" placeholder="Enter Your Class" required onChange={(e)=> setStd(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formmobile">
          <Form.Control type="text" placeholder="Enter Your MobileNo" required onChange={(e)=> setMobile(e.target.value)}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formemail">
          <Form.Control type="text" placeholder="Enter Your Email" required onChange={(e)=> setEmail(e.target.value)}></Form.Control>
      </Form.Group>

      <Button size="lg" onClick={(e)=>handleSubmit(e)}  className= "btn btn-secondary">Add profile</Button>
    </Form> 
    </div>
    )
}
export default Add;