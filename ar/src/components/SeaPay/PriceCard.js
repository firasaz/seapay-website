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
    isFeatured,
    featureTitle,
    features
  }
}) {
  return (
    
    <Col
      lg={4}
      className={classNames('border-top border-bottom', {
        'dark__bg-1000 px-4 px-lg-0': isFeatured
      })}
      style={{ backgroundColor: isFeatured && 'rgba(115, 255, 236, 0.18)' }}
    >
      <div className="h100">
        <div className="text-center p-4">
          <h3 className="fw-normal my-0">{title}</h3>
          {/* <p className="mt-3">{subTitle}</p> */}
          <h2 className="fw-medium my-4">
            <sup className="fw-normal fs-2 me-1">SAR</sup>
            {price}
            <small className="fs--1 text-700">/ year</small>
          </h2>
          <Button
            as={Link}
            variant={isFeatured ? 'primary' : 'outline-primary'}
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
                <img src={feature.icon} width='50px' />
                {/* {feature.tag && (
                  <SoftBadge pill bg={feature.tag.type}>
                    {feature.tag.label}
                  </SoftBadge>
                )} */}
              </li>
            ))}
          </ul>
          <Link to="#!" className="btn btn-link">
            More about {title}
          </Link>
        </div>
      </div>
    </Col>
  )
}

export default PriceCard