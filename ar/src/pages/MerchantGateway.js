import React from 'react'
import Hero from 'components/SeaPay/Hero';
import Navigation from 'components/SeaPay/Navigation';

import dashboardImage from 'assets/img/generic/falcon-mode-auto.jpg'
import f1Img from 'assets/img/generic/falcon-mode-dark.jpg'
import Banner from 'components/SeaPay/Banner';
import Section from 'components/common/Section';
import Fragment from 'components/SeaPay/Fragment';
import Footer from 'components/SeaPay/Footer';
function MerchantGateway() {
    return (
        <>
            <Section className='m-0 p-0'>
                <Navigation />
            </Section>
            
            <Hero 
                title='حوّل الأموال بشكل سلس وموسّع مع حلول إرسال المدفوعات' 
                description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
                msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
                btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
                dashboardImage={dashboardImage}
            />

            <Banner />

            <Fragment 
                title='تحسين شامل'
                description='قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.'
                imgAttr={{ src: f1Img, width: '500px', style: {borderRadius: '5px'} }}
                style={{display: 'flex', backgroundColor: '#fff'}}
            />

            <Footer />
        </>
    )
}

export default MerchantGateway
