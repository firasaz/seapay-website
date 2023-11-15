import Footer from 'components/SeaPay/Footer'
import Fragment from 'components/SeaPay/Fragment'
import PriceCard from 'components/SeaPay/PriceCard'
import Section from 'components/common/Section'
import Future from 'components/SeaPay/Future'
import Hero from 'components/SeaPay/Hero'
import Navigation from 'components/SeaPay/Navigation'
import React from 'react'

import iconRevenue from 'assets/img/icons/icon-revenue.svg';
import iconAuth from 'assets/img/icons/64a6e2c0eddcaacf900c5fa8_ca408fee-cc1e-4c96-9968-f626fe9908bf_icon-authentication.svg';
import iconSmart from 'assets/img/icons/64a6e2c0eddcaacf900c5faa_20f2dc44-6741-489a-8cb6-953b30cb7996_icon-smart-experience.svg';
import iconPayment from 'assets/img/icons/64a6e2c0eddcaacf900c5fa7_5426042c-938a-415f-a24d-ea3cc4ed8bb9_icon-plug-and-play.svg';
import POS from 'assets/img/seapay/POS-cropped.png'
import { pricingData } from 'data/pricing'
import POS1 from 'assets/img/seapay/pos1.png'
import POS2 from 'assets/img/seapay/pos2.png'
import POS3 from 'assets/img/seapay/pos3.png'
function POSGateway() {
  return (
    <>
        <Navigation />
        <Hero 
            title='حوّل الأموال بشكل سلس وموسّع مع حلول SeaGateway للمدفوعات'
            // description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
            msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
            btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
            dashboardImage={POS}
        >
            <Future style={{color:'#fff'}} image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future style={{color:'#fff'}} image={iconAuth} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future style={{color:'#fff'}} image={iconSmart} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future style={{color:'#fff'}} image={iconPayment} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />

        </Hero>

        <Section>
            <div className='mb-4'>
                <h1 className='fw-bold'>بناء الثقة مع عملائك من خلال خدماتنا</h1>
                <h2 className='fw-medium' style={{ color:'#0fe1fe' }}>تقدم لك خدمة SeaGateway</h2>
            </div>
            <Fragment
                title={{ 'text': 'زيادة المبيعات', 'as': 'h2', style:{ color:'#1200f1' } }}
                description={{ 'text': 'من خلال الاتصال بمعالج الدفع ، يقبل المدفوعات من خلال بطاقات الائتمان أو الخصم ومحافظ الهاتف المحمول .' }}
                imgAttr={{ 'src': POS3, width: '250px' }}
                style={{ backgroundColor:'#fff', marginBottom:'8px' }}
                flex
            />
            <div className="equal-cards gap-2">
                <Fragment
                    title={{ 'text': 'سرعة الخدمة', 'as': 'h2', style:{ color:'#1200f1' } }}
                    description={{ 'text': 'يتيح نظام مبيعات وخدمة النقاط إنجاز سريع للمعاملات - وهو بديل قابل للتطبيق وموثوق للخدمة اليدوية.' }}
                    imgAttr={{ 'src': POS1, width: '250px' }}
                    style={{ backgroundColor:'#fff' }}
                />
                <Fragment
                    title={{ 'text': 'خدمات بيع متعددة', 'as': 'h2', style:{ color:'#1200f1' } }}
                    description={{ 'text': 'مع وجود نظام نقاط البيع ، يمكنك توفير مجموعة كاملة من خيارات الدفع للعملاء .' }}
                    imgAttr={{ 'src': POS2, width: '250px' }}
                    style={{ backgroundColor:'#fff' }}
                />
                {/* <Fragment
                    title={{ 'text': 'زيادة المبيعات', 'as': 'h2', style:{ color:'#1200f1' } }}
                    description={{ 'text': 'من خلال الاتصال بمعالج الدفع ، يقبل المدفوعات من خلال بطاقات الائتمان أو الخصم ومحافظ الهاتف المحمول .' }}
                    imgAttr={{ 'src': POS3, width: '250px' }}
                    style={{ backgroundColor:'#fff', marginBottom:'8px' }}
                /> */}
            </div>
        </Section>
        
        {/* <Section>
            <div id='pricingCards'style={{direction:'rtl'}} className='bg-white rounded p-3'>
                {pricingData.map(pricing => (
                    <PriceCard key={pricing.id} pricing={pricing} style={{direction:'ltr'}} />
                ))}
                </div>
        </Section> */}

        <Footer />
    </>
  )
}

export default POSGateway