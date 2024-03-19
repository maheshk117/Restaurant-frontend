import React from 'react'
import './RestRev.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function RestRev({review}) {
  
  return (
    <>
      {
    review?.map((item) => {
      console.log(item);
    })
  }


    </>
  )
}

export default RestRev