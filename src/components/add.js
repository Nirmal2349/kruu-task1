import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import {  useNavigate } from "react-router-dom";
import { PageContext } from "../context";

function Add() {

  const { setCollection } =

    React.useContext(PageContext);

    const [name, setName] = useState("");
    const [degree, setDegree] = useState("");

    const history = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();

      

    

      let a = name,
        b = degree;

        setCollection((prev) => [...prev, { id: uuid(), name: a, degree: b }]);


      // setCollection.push({ id: uniqueID, Name: a, Degree: b });

      history("/");
    };

    return (
      <div>
        <Form className="d-grid gap-2">
          <Form.Group className="mb-3" controlId="formName">
            <input
              value={name}
              placeholder="Enter Name"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDegree">
            <input
              value={degree}
              placeholder="Degree"
              required
              onChange={(event) => setDegree(event.target.value)}
            />
          </Form.Group>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
}

export default Add;
