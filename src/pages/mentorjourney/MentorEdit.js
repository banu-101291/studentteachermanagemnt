import React, {useState ,  useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Array from "./mentordata";
import {useNavigate} from "react-router-dom"


function MentorEdit(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const [id,setId] = useState("");

    let history = useNavigate();

    var index = Array.map(function(e){
        return e.id
    }).indexOf(id);
   
    const handleUpdate = (e)=>{
      e.preventDefault();
      let a = Array[index];
      a.name = name;
      a.age = age;
      a.email = email;

      history('/mentors')
    }

    useEffect(()=>{
        setName(localStorage.getItem("name"))
        setAge(localStorage.getItem("age"))
        setEmail(localStorage.getItem("email"))
        setId(localStorage.getItem("id"))
    },[])

    return(
        <div>
        <Form className="d-grid-gap-2" style={{margin:"10px"}}>
        <Form.Group className="mb-3" controlId="formname">
            <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e)=> setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formage">
            <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e)=> setAge(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formemail">
            <Form.Control type="text" placeholder="Enter Email" value={email} required onChange={(e)=> setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handleUpdate(e)} className= "btn btn-secondary">Update</Button>
      </Form> 
      </div>
    )
}


export default MentorEdit