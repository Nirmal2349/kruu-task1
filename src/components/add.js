import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../context";

function Add() {
  const { setCollection } = React.useContext(PageContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [education,setEducation]= useState("")
  const [mobile,setMobile] = useState("")

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let a = name,
      b = age,
      c= education,
      d = mobile;

    setCollection((prev) => [...prev, { id: uuid(), name: a, age: b, education: c, mobile: d }]);

    // setCollection.push({ id: uniqueID, Name: a, age: b });

    history("/");
  };

  return (
    <div className="box-content">
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <input
            value={name}
            placeholder="Enter name"
            required
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <input
            value={age}
            placeholder=" Enter age"
            type="number"
            maxLength="2"
            required
            onChange={(event) => setAge(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formeducation">
          <input
            value={education}
            placeholder="Enter education"
            required
            onChange={(event) => setEducation(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMobile">
          <input
            value={mobile}
            placeholder="Enter Mobile brand"
            required
            onChange={(event) => setMobile(event.target.value)}
          />
        </Form.Group>
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default Add;
