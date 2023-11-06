import React from 'react'
import Hero from 'components/SeaPay/Hero';
import Navigation from 'components/SeaPay/Navigation';

import dashboardImage from 'assets/img/generic/falcon-mode-auto.jpg'
import Section from 'components/common/Section';
import Fragment from 'components/SeaPay/Fragment';
import Footer from 'components/SeaPay/Footer';
function PaymentOptions() {
    return (
        <>
            <Navigation />
            
            <Hero 
                title='حوّل الأموال بشكل سلس وموسّع مع حلول إرسال المدفوعات' 
                description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
                msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
                btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
                dashboardImage={dashboardImage}
            />

            <Section style={{backgroundColor:'#fff'}}>
                <Fragment
                    title={{ 'text':'Make payments your competitive edge' }}
                    description={{ 'text':'Boost your acceptance rate, cut processing costs, fight fraud, and create extraordinary customer experiences. High-performing payments means high-performing business.'}}
                    style={{ borderRadius:'5px' }}
                >
                    <div className='d-flex gap-5'>
                        <Fragment
                            style={{backgroundColor: '#272932', borderRadius: '18px'}} // applies to outermost div element
                            title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                            description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                            imgAttr={{src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/652580244976b49df59e9bd3_logo%20Chip.svg'}}
                        />
                        <Fragment
                            style={{backgroundColor: '#272932', borderRadius: '18px'}} // applies to outermost div element
                            title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                            description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                            imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/6525804552f7acbb92f35b28_logo%20Chip%20(1).svg'}}
                        />
                        <Fragment
                            style={{backgroundColor: '#272932', borderRadius: '18px'}} // applies to outermost div element
                            title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                            description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                            imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/6525805e724e0cccd751850a_logo%20Chip%20(2).svg'}}
                        />
                        <Fragment
                            style={{backgroundColor: '#272932', borderRadius: '18px'}} // applies to outermost div element
                            title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                            description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                            imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/65258090eb1519cb70551e14_logo%20Chip%20(3).svg'}}
                        />
                    </div>
                </Fragment>
            </Section>

            <Footer />
        </>
    )
}

export default PaymentOptions
