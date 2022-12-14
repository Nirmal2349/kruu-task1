import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { PageContext } from "../context";

function Home() {
  const { collection, setCollection } = React.useContext(PageContext);
  const history = useNavigate();

  const handleDelete = (id) => {
    setCollection((prev) => prev.filter((obj) => obj.id !== id));

    history("/");
  };

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th>Mobile</th>
            <th>Actons</th>
          </tr>
        </thead>
        <tbody>
          {collection.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.education}</td>
                <td>{data.mobile}</td>
                <td>
                  <Link to={`/edit/${data.id}`}>
                    <Button onClick={() => data.id}>Edit</Button>
                  </Link>
                  &nbsp;
                  <Button onClick={() => handleDelete(data.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/new">
        <Button>Add data</Button>
      </Link>
    </div>
  );
}

export default Home;
