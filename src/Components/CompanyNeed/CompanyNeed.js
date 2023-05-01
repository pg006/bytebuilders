import React from 'react'
import './CompanyNeed.scss'
import { Col, Row } from 'react-bootstrap'
import person_image from '../../assets/images/person_image.png'
const CompanyNeed = () => {
  return (
    <React.Fragment>
      <div className='company-need-main-div pt-4'>
        <Row className='need-row px-5 pt-3 m-0'>
          <Col lg={8} md={6} sm={12}>
            <div className="deliver-div">
              <div className="content-div">
                <h1>
                  Get the Business IT Service That Your Company Needs
                </h1>
                <h6>
                Bytebuilders Infotech may help startups build scalable and secure technology platforms that can support their growth and expansion.
                </h6>
                <button className="discover-btn mt-4">Get Started</button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='second-div'>
              <img src={person_image} alt='person_image' />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default CompanyNeed