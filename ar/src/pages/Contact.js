import Hero from 'components/SeaPay/Hero'
import Navigation from 'components/SeaPay/Navigation'
import Section from 'components/common/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

import Earth from 'assets/img/seapay/Earth.png'
import Footer from 'components/SeaPay/Footer';
function Contact() {
  return (
    <>
        <Navigation />
        <Hero 
            title='حوّل الأموال بشكل سلس وموسّع مع حلول SeaGateway للمدفوعات'
            // description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
            msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
            btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
            dashboardImage={Earth}
        />
        <Section style={{ backgroundColor:'#fff' }}>
            <div className='equal-cards'>
                <div className='row flex-1'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faLocationArrow} style={{ fontSize:'25px', color:'#05007C'}} />
                        <div className="ms-3" style={{ textAlign: "start"}}>
                            <p style={{color: 'darkslategray', fontSize: "17px", fontWeight:'bold' }}>
                                المملكة العربية السعودية، الرياض 13221، طريق الملك فهد، حي الصحافة، برج بحر العرب
                            </p>
                        </div>
                    </div>
                    <div className="d-flex w-full contact-details justify-content-between">
                        <div className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize:'25px', color:'#05007C', marginLeft:'10px', marginRight:'0px' }} />
                            <div className="w-full m-auto" style={{"direction": "ltr", color: "darkslategray", fontSize: "17px", fontWeight:'bold' }}>
                                <p className="m-auto">
                                800 124 0428
                                </p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faMailBulk} style={{ fontSize:'25px', color:'#05007C', marginLeft:'10px', marginRight:'0px' }} />
                            <div className="w-full m-auto" style={{"direction": "ltr", color: "darkslategray", fontSize: "17px", fontWeight:'bold' }}>
                                <p style={{ color: 'darkslategray', fontSize: '17px'}}>
                                    info@seapay.com.sa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row flex-1'>
                    <iframe
                        title='Arab Sea Tower'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3621.9976586427124!2d46.6306435!3d24.7955337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee34edb7aa86f%3A0x8f631aa71d606e29!2sArab%20Sea%20Tower!5e0!3m2!1sen!2ssa!4v1695893441315!5m2!1sen!2ssa"
                        width="100%"
                        height="450"
                        style={{border:'0'}}
                        allowFullScreen
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </Section>
        <Footer />
    </>
  )
}

export default Contact