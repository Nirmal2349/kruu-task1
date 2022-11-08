import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { PageContext } from "../context";




function Edit() {

    let { id } = useParams();

    


     const { setCollection, collection } = React.useContext(PageContext);

     const selectedCollection = collection.find(obj=>obj.id === id)

     const [name, setName] = useState(selectedCollection.name);

     const [degree, setDegree] = useState(selectedCollection.degree);

     const history = useNavigate();

     const handleSubmit = (event) => {
       event.preventDefault();

       const updatedObj = { id: id, name: name, degree: degree };

       const removedCollection = collection.filter((obj) => obj.id !== id);

       setCollection([ ...removedCollection,updatedObj ])

       history("/");
     };;

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
        <Button onClick={handleSubmit}>update</Button>
      </Form>
    </div>
  );
}

export default Edit