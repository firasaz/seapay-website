import { Button, Col, Row } from 'react-bootstrap';
import { useAppContext } from 'Main';
import { Typewriter } from 'react-simple-typewriter';
// import dashboardImage from 'assets/img/generic/dashboard.png';
import Section from 'components/common/Section';
import { Link } from 'react-router-dom';

function Hero({ title, description, msg, btnText, span, dashboardImage }) {
  const {
    config: { isDark, isRTL }
  } = useAppContext();
  return (
    <Section
      className="hero overflow-hidden"
      data-bs-theme="light"
      position="center bottom"
      overlay
    >
      <Row className="justify-content-center align-items-center py-5">
        <Col
          md={11}
          lg={8}
          xl={dashboardImage ? 4 : 12}
          className={dashboardImage ? "text-center text-xl-start" : "text-center" }
        >
          <h1 className="text-white fw-light" style={{ paddingBottom: 10 }}>{title}</h1>
          {span && (
            <h1 className='text-white fw-light py-1'>
              <span className="fw-bold">
                <Typewriter
                  words={['البطاقات الائتمانية', 'نقاط البيع', 'المحافظ الالكترونية', 'الفواتير الالكترونية']}
                  loop={false}
                  cursor={!isRTL ? true : false}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <br />
            </h1>
          )}
          <div className='py-4'>
            {description}
          </div>
          <p className="lead text-white opacity-75">
            {msg}
          </p>
          <Button
            as={Link}
            variant="outline-light"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-0 py-2"
            to="#!"
          >
            {btnText}
          </Button>
        </Col>
        {dashboardImage && (
          <Col
            xl={{ span: 7, offset: 1 }}
            className="align-self-start mt-4 mt-xl-0"
          >
            <Link to="/">
              <img
                className="img-fluid"
                src={dashboardImage}
                alt=""
              />
            </Link>
          </Col>
        )}
      </Row>
    </Section>
  )
}

export default Hero
