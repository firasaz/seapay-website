import React from 'react';
import partnerList from 'data/partnerList';
import Section from 'components/common/Section';
import { Row, Col, Image } from 'react-bootstrap';

const Partner = props => (
  <Col xs={3} sm="auto" className="my-1 my-sm-3 px-x1">
    <Image className="landing-cta-img" {...props} alt="Partner" />
  </Col>
);

const Partners = ({ style }) => {
  return (
    <Section className="py-3" style={style}>
      <Row className="flex-center">
        {partnerList.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </Row>
    </Section>
  );
};

export default Partners;