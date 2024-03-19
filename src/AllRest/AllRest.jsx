import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard'
import './AllRest.css'
import { base_url } from '../base_url'


function AllRest() {

  // const base_url = 'http://localhost:3001'

  //state creation
  const [allRest, setAllRest] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants`)
    console.log(data);
    setAllRest(data)
  }
  console.log(allRest);

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Row className='rowDiv mt-3 px-3 w-100' sm = {10} md={8} lg={6} xl={4}>
        {
          allRest.map((item) => (
            
              <Col>
                <RestCard restaurants={item} />
              </Col>
            
          ))
        }
      </Row>
    </>
  )
}

export default AllRest