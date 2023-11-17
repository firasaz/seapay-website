import React from 'react'

import { Button, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
function PriceCard({
  pricing: {
    title,
    // subTitle,
    price,
    url,
    buttonText,
    bgColor,
    featureTitle,
    features
  },
  style
}) {
  return (
    
    <Col
      lg={4}
      className={classNames('border-top border-bottom')}
      style={{ ...style }}
    >
      <div className="h-100">
        <div 
          className="text-center p-4"
          style={{ backgroundColor: bgColor }}
        >
          <h3 className="fw-normal my-0">{title}</h3>
          {/* <p className="mt-3">{subTitle}</p> */}
          <h2 className="fw-medium my-4">
            <sup className="fw-normal fs-2 me-1">SAR</sup>
            {price}
            <small className="fs--1 text-700">/ year</small>
          </h2>
          <Button
            as={Link}
            variant={'primary' }
            to={url}
          >
            {buttonText}
          </Button>
        </div>
        <hr className="border-bottom-0 m-0" />
        <div className="text-start px-sm-4 py-4">
          <h5 className="fw-medium fs-0">{featureTitle}</h5>
          <ul className="list-unstyled mt-3">
            {features.map(feature => (
              <li className="py-1" key={feature.id}>
                <FontAwesomeIcon icon={faCheck} className="me-2 text-success" />{' '}
                {feature.title}{' '}
                { feature.icon && <img src={feature.icon} width='50px' alt='payment' /> }
                {/* {feature.tag && (
                  <SoftBadge pill bg={feature.tag.type}>
                    {feature.tag.label}
                  </SoftBadge>
                )} */}
              </li>
            ))}
          </ul>
          {/* <Link to="#!" className="btn btn-link">
            More about {title}
          </Link> */}
        </div>
      </div>
    </Col>
  )
}

export default PriceCard