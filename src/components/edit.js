import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { PageContext } from "../context";

function Edit() {
  let { id } = useParams();

  const { setCollection, collection } = React.useContext(PageContext);

  const selectedCollection = collection.find((obj) => obj.id === id);

  const [name, setName] = useState(selectedCollection.name);

  const [age, setAge] = useState(selectedCollection.age);

  const [education, setEducation] = useState(selectedCollection.education);

  const [mobile, setMobile] = useState(selectedCollection.mobile);

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedObj = {
      id: id,
      name: name,
      age: age,
      education: education,
      mobile: mobile,
    };

    const removedCollection = collection.filter((obj) => obj.id !== id);

    setCollection([...removedCollection, updatedObj]);

    history("/");
  };

  return (
    <div className="box-content">
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <input
            value={name}
            placeholder="Enter Name"
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
          <Button onClick={handleSubmit}>update</Button>
        </div>
      </Form>
    </div>
  );
}

export default Edit;
