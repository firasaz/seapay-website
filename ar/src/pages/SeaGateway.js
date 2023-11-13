import Hero from 'components/SeaPay/Hero';
import Navigation from 'components/SeaPay/Navigation';
import Banner from 'components/SeaPay/Banner';
import Section from 'components/common/Section';
import Fragment from 'components/SeaPay/Fragment';
import Footer from 'components/SeaPay/Footer';
import Future from 'components/SeaPay/Future';

import iconRevenue from 'assets/img/icons/icon-revenue.svg';
import iconAuth from 'assets/img/icons/64a6e2c0eddcaacf900c5fa8_ca408fee-cc1e-4c96-9968-f626fe9908bf_icon-authentication.svg';
import iconSmart from 'assets/img/icons/64a6e2c0eddcaacf900c5faa_20f2dc44-6741-489a-8cb6-953b30cb7996_icon-smart-experience.svg';
import iconPayment from 'assets/img/icons/64a6e2c0eddcaacf900c5fa7_5426042c-938a-415f-a24d-ea3cc4ed8bb9_icon-plug-and-play.svg';
import SeaGatewayy from 'assets/img/seapay/SeaGateway.png'
import gateway1 from 'assets/img/seapay/seagateway1.png'
import gateway2 from 'assets/img/seapay/seagateway2.png'
import gateway3 from 'assets/img/seapay/seagateway3.png'
function SeaGateway() {
    return (
        <>
            <Navigation />
            
            <Hero 
                title='حوّل الأموال بشكل سلس وموسّع مع حلول SeaGateway للمدفوعات'
                // description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
                msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
                btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
                dashboardImage={SeaGatewayy}
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
                    title={{ 'text': 'قبول الدفع عبر الإنترنت', 'as': 'h2', style:{ color:'#1200f1' } }}
                    description={{ 'text': 'توفر لك SeaGateway طرق دفع متعددة عبر الإنترنت لتنمية أعمالك من خلال البدء في قبول المدفوعات عبر الإنترنت من خلال متجرك.' }}
                    imgAttr={{ 'src': gateway3, width: '250px' }}
                    style={{ backgroundColor:'#fff', marginBottom:'8px' }}
                    flex
                />
                <div className="equal-cards gap-2">
                    <Fragment
                        title={{ 'text': 'نمو العمل', 'as': 'h2', style:{ color:'#1200f1' } }}
                        description={{ 'text': 'توفر لك SeaGateway طرق دفع متعددة عبر الإنترنت لتنمية أعمالك من خلال البدء في قبول المدفوعات عبر الإنترنت من خلال متجرك.' }}
                        imgAttr={{ 'src': gateway1, width: '250px' }}
                        style={{ backgroundColor:'#fff' }}
                    />
                    <Fragment
                        title={{ 'text': 'أمان', 'as': 'h2', style:{ color:'#1200f1' } }}
                        description={{ 'text': 'قم بمعالجة المدفوعات عبر الإنترنت باستخدام منصة واحدة آمنة باستخدام SeaGateway.' }}
                        imgAttr={{ 'src': gateway2, width: '250px' }}
                        style={{ backgroundColor:'#fff' }}
                    />
                </div>
            </Section>

            <Section style={{ backgroundColor:'#fff' }}><Banner style={{color:'#fff', backgroundColor:'#000'}} /></Section>
            <Footer />
            {/* <Section className=''>
                <div className="d-flex flex-row gap-3">
                    <Fragment
                        title={{ 'text':'تحسين شامل' }}
                        description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                        imgAttr={{ src: f2Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                        style={{backgroundColor: '#fff', borderRadius: '4px'}}
                        // flex
                    />
                    <Fragment
                        title={{ 'text':'تحسين شامل' }}
                        description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                        imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                        style={{backgroundColor: '#fff', borderRadius: '4px'}}
                        // flex
                    />
                </div>
            </Section> */}

            
            {/* <Section>
                <div className="d-flex flex-column gap-3">
                    <Fragment
                        title={{ 'text':'تحسين شامل' }}
                        description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                        // imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                        style={{ backgroundColor: '#fff', borderRadius: '4px', textAlign:'center' }}
                        flex
                    />
                    <Fragment
                        title={{ 'text':'تحسين شامل' }}
                        description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                        imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                        style={{ backgroundColor: '#fff', borderRadius: '4px' }}
                        flex
                    />
                </div>
            </Section> */}

            {/*
            <Section className='py-5 bg-white'>
                <Fragment
                    title={{ 'text':'تحسين شامل' }}
                    description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                    // imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                    style={{ backgroundColor: '#fff', borderRadius: '4px', textAlign:'center' }}
                    flex
                />
            </Section>
            */}
            
            {/* 
            <Section className='py-5 bg-white mt-3'>
                <Fragment
                    title={{ 'text':'تحسين شامل' }}
                    description={{ 'text':'قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.' }}
                    imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
                    style={{ backgroundColor: '#fff', borderRadius: '4px' }}
                    flex
                    // flexReverse
                />
            </Section> 
             */}
            {/* <Banner style={{borderRadius:'0px', color:'#000'}} /> */}
        </>
    )
}

export default SeaGateway
