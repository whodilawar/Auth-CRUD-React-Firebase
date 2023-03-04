import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import Employee from './Employee';
import AddForm from './AddForm';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";



const EmployeeList = () => {
    const {sortedEmployees} = useContext(EmployeeContext);
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [authUser, setAuthUser] = useState(null);
    //const handleShowAlert = () =>setShowAlert(true);
    const navigate = useNavigate();

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
            localStorage.setItem('user', JSON.stringify(user.email));
          } else {
            setAuthUser(null);
          }
        });
        return () => {
          listen();
        };
      }, []);




    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
            navigate("/login");
          })
          .catch((error) => console.log(error));
      };

    
    const currentEmployees = sortedEmployees ? sortedEmployees:"";
  
      
    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Employees</b></h2>
                {authUser ? <> <h5>{`Signed in as ${authUser.email}`}</h5></>:"" }
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
            </div>
            <div className="col-sm-6">
                <Button onClick={userSignOut} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Logout</span></Button>					
            </div>
        </div>
    </div>
    <Alert show={showAlert} variant="success">
        Emlployee List Updated Succefully!
    </Alert>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
                {
                  currentEmployees?.map(employee => (
                      <tr key={employee.id}>
                        <Employee employee={employee} />
                    </tr>
                  ))  
                }
        </tbody>
    </table>

          

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal> 
    </>
    )
}

export default EmployeeList;