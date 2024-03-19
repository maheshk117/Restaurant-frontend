import React from 'react'
import './RestCard.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
  console.log(restaurants);
  return (
    <>
      <Link to={`view/${restaurants.id}`}>
      <MDBCard className='mainDiv mb-4'>
      <MDBCardImage className='restaurantImage' src={restaurants.photograph} position='top' alt='...' />
      <MDBCardBody className='classBody d-flex flex-column justify-content-between '>
        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
          <p>{restaurants.address}</p>
          <p>{restaurants.cuisine_type}</p>
        </MDBCardText>
        <MDBBtn href='#'>View Restaurant</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </Link>
    </>
  )
}

export default RestCard