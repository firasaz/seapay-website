import { Button, Col, Row } from 'react-bootstrap';
import { useAppContext } from 'Main';
import { Typewriter } from 'react-simple-typewriter';
// import dashboardImage from 'assets/img/generic/dashboard.png';
import Section from 'components/common/Section';
import { Link } from 'react-router-dom';


function Hero({ title, description, msg, btnText, span, dashboardImage, to, bgImg, children }) {
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <Section
      className="overflow-hidden pt-7"
      data-bs-theme="light"
      overlay
      image={bgImg.img}
      position={bgImg.position}
    >
      <Row className="justify-content-center align-items-center py-5">
        <Col
          md={11}
          lg={8}
          xl={dashboardImage ? 4 : 12}
          className={dashboardImage ? "text-center text-xl-start" : "text-center" }
        >
          <h1 className=" fw-light" style={{ paddingBottom: 10, lineHeight: '60px', ...title.style }}>{title.text}</h1>
          {span && (
            <h1 className=' fw-light py-1' style={title.style}>
              <span className="fw-bold">
                <Typewriter
                  words={['روابط الدفع', 'نقاط البيع', 'بوابة دفع']}
                  loop={false}
                  cursor={!isRTL ? true : false}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
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
          {btnText && <div style={title.style} className='w-full'>
            <Button
              as={Link}
              variant="outline-light"
              size="lg"
              className="border-2 rounded-pill mt-4 fs-0 py-2 rounded"
              to="https://mp.seapay.com.sa/register"
            >
              {btnText}
            </Button>
          </div>}
        </Col>
        {dashboardImage && (
          <Col
            xl={{ span: 7, offset: 1 }}
            className="align-self-start mt-4 mt-xl-0"
          >
            <Link to={to}>
              <img
                className="img-fluid"
                src={dashboardImage}
                alt=""
              />
            </Link>
          </Col>
        )}
      </Row>
      <Row>{children}</Row>
    </Section>
  )
}

export default Hero
