import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import { topNavbarBreakpoint } from 'config';
import { useAppContext } from 'Main';
import ThemeControlDropdown from 'components/navbar/top/ThemeControlDropdown';
import Flex from 'components/common/Flex';
import dashboardImage from 'assets/img/generic/dashboard.png';
import Section from 'components/common/Section';
import { Button, Col, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import 'assets/css/seapay.css';
import Future from 'components/SeaPay/Future';
import iconRevenue from 'assets/img/icons/icon-revenue.svg';
import Product from 'components/SeaPay/Product';
import paymentsImage from "assets/img/generic/payments.png";
const Landing = () => {
  const {
    config: { isDark, isRTL }
  } = useAppContext();

  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);
  return (
    <>
      <Navbar
        variant={isDark ? 'light' : 'dark'}
        fixed="top"
        expand={topNavbarBreakpoint}
        className={classNames('navbar-standard navbar-theme', {
          'bg-100': !navbarCollapsed && isDark,
          'bg-dark': !navbarCollapsed && !isDark
        })}
      >
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">
            SeaPay
          </Navbar.Brand>
          <Flex alignItems="center" className="gap-2">
            <ThemeControlDropdown dropdownClassName="d-lg-none" />
            <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
          </Flex>
          <Navbar.Collapse className="scrollbar">
            <Nav>
              <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
            </Nav>
            <Nav navbar className="ms-auto align-items-lg-center">
              <Nav.Item>
                <Nav.Link as={Link} to="https://mp.seapay.com.sa/register">
                  دخول
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="https://mp.seapay.com.sa/register">
                  تسجيل
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Section
        className="py-0 hero  overflow-hidden"
        data-bs-theme="light"
        position="center bottom"
        overlay
      >
        <Row className="justify-content-center align-items-center" style={{ paddingTop: 150, paddingBottom: 50 }}>
          <Col
            md={11}
            lg={8}
            xl={4}
            className="pb-7 pb-xl-9 text-center text-xl-start \"
          >
            <h1 className="text-white fw-light" style={{ paddingBottom: 10 }}>
              <div style={{ paddingBottom: 30 }}>اقبل الدفع بواسطة</div>
              <span className="fw-bold">
                <Typewriter
                  words={['البطاقات الإتمانية', 'نقاط البيع', 'المحافظ الكترونية', 'الفواتير الكترونية']}
                  loop={false}
                  cursor={!isRTL ? true : false}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />
              <div style={{ paddingTop: 10, }}></div>
            </h1>
            <div style={{ paddingBottom: 20 }}>
              بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.
            </div>
            <p className="lead text-white opacity-75">
              طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما
            </p>
            <Button
              as={Link}
              variant="outline-light"
              size="lg"
              className="border-2 rounded-pill mt-4 fs-0 py-2"
              to="#!"
            >
              ابدء تجربة فريدة من نوعها مع SeaPay
            </Button>
          </Col>
          <Col
            xl={{ span: 7, offset: 1 }}
            className="align-self-end mt-4 mt-xl-0"
          >
            <Link to="/">
              <img
                className="img-fluid"
                src={dashboardImage}
                alt=""
              />
            </Link>
          </Col>
        </Row>
      </Section>
      <Section backgroundColor={"white"}>
        <h1 className="fs-2 fs-sm-4 fs-md-5" style={{ fontWeight: "bolder" }}>ما الذي تقدمة SeaPay ؟</h1>
        <div style={{ paddingTop: 30 }}>
          <div className='row'>
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
          </div>
          <div className='row'>
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
          </div>
        </div>
      </Section>
      <Section>
        <div style={{ paddingBottom: 20 }}>
          منتجاتنا
        </div>
        <h1 className="fs-2 fs-sm-4 fs-md-5" style={{ fontWeight: "bolder" }}>اكتشف قائمة منتجاتنا</h1>
        <div style={{ paddingTop: 30 }}>
          <div className='row'>
            <Product image={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
            <Product />
            <Product />
          </div>
          <div className='row'>
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Landing;
