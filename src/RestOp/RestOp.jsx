import React, { useState } from 'react'
import './RestOp.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


function RestOp({op}) { //operating hour details
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log({op});
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem>Sunday: {op.Sunday}</MDBListGroupItem>
      <MDBListGroupItem>Monday: {op.Monday}</MDBListGroupItem>
      <MDBListGroupItem>Tuesday: {op.Tuesday}</MDBListGroupItem>
      <MDBListGroupItem>Wednesday: {op.Wednesday}</MDBListGroupItem>
      <MDBListGroupItem>Thursday: {op.Thursday}</MDBListGroupItem>
      <MDBListGroupItem>Friday: {op.Friday}</MDBListGroupItem>
      <MDBListGroupItem>Saturday: {op.Saturday}</MDBListGroupItem>
    </MDBListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RestOp