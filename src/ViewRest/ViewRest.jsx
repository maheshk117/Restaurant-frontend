import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestRev from '../RestRev/RestRev';


function ViewRest() {

  //create a state for holding restaurant details
  const [restDetails, setRestDetails] = useState()

  // const pathParams = useParams()
  // console.log(pathParams); 

  //using destructuring
  const { id } = useParams()
  console.log(id);

  //make an API call to fetch particular restaurant details
  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`) //destructuring
    //http://localhost:3001/restaurants/3
    console.log(data)
    setRestDetails(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      {
        restDetails ?
          <Row>

            <Col>
              {/* img */}
              <Image src={`${restDetails.photograph}`} fluid style={{ height: "500px", width: "400px", padding: "20px", border: "2px solid white" }} />
            </Col>

            <Col style={{display:"flex",alignItems:"center"}}>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
                <MDBRipple>
                  <MDBListGroupItem tag='a' href='#' action noBorders active aria-current='true' className='px-3'>
                    <h4 style={{textAlign:"center"}}>{restDetails.name}</h4>
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                  <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                    {restDetails.address}
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                  <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                    Cuisine Type: {restDetails.cuisine_type}
                  </MDBListGroupItem>
                </MDBRipple>
                <MDBRipple>
                  <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                    Neighbourhood: {restDetails.neighborhood}
                  </MDBListGroupItem>
                  <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                    <RestOp op={restDetails.operating_hours}/>
                  </MDBListGroupItem>
                  <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
                  <RestRev review={restDetails.reviews}/>
                  </MDBListGroupItem>
                </MDBRipple>
              </MDBListGroup>
            </Col>

          </Row> : <p>No Data</p>
      }
    </>
  )
}

export default ViewRest