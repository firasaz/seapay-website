import Section from 'components/common/Section';
import Future from 'components/SeaPay/Future';
// import Product from 'components/SeaPay/Product';
import Navigation from 'components/SeaPay/Navigation';
import Hero from 'components/SeaPay/Hero';
import Footer from 'components/SeaPay/Footer';
import Fragment from 'components/SeaPay/Fragment';
import Banner from 'components/SeaPay/Banner';

import iconRevenue from 'assets/img/icons/icon-revenue.svg';
import icon from 'assets/img/icons/64a6e2c0eddcaacf900c5fa7_5426042c-938a-415f-a24d-ea3cc4ed8bb9_icon-plug-and-play.svg';
import lowFees from 'assets/img/icons/64a6e2c0eddcaacf900c5faa_20f2dc44-6741-489a-8cb6-953b30cb7996_icon-smart-experience.svg';
import 'assets/css/seapay.css';
import dashboardImage from 'assets/img/generic/dashboard.png';
// import paymentsImage from "assets/img/generic/payments.png";

import mobileApp from 'assets/img/seapay/mobile-app-cropped.png'
import POS from 'assets/img/seapay/POS-cropped.png'
import API from 'assets/img/seapay/API-cropped.png'
import AML from 'assets/img/seapay/AML-cropped.png'
import Dashboard from 'assets/img/seapay/Dashboard-cropped.png'
import Privacy from 'assets/img/seapay/Privacy-cropped.png'
import Partners from 'components/SeaPay/Partners';

import bgCover from 'assets/img/seapay/stock-photo-tablet-online-payment-banking.jpg'
const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero 
        title={{ text:'ابدأ تجارتك واستقبل مدفوعاتك مع', style:{ textAlign:'start' }}}
        span
        // description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
        // msg='ابدأ في استخدام حلول سي باي لقبول مدفوعاتك تدير سي باي العديد من أنواع الدفع من المعاملات لمختلف أحجام وفئات الأعمال...سي باي تسهل لك مدفوعاتك في كل مكان.'
        btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
        // dashboardImage={dashboardImage}
        bgImg={{ img: bgCover, position: 'center top' }}
      >
        <Partners />
      </Hero>
      <Section style={{backgroundColor: "#fff"}}>
        <h1 className="fs-2 fs-sm-4 fs-md-5" style={{ fontWeight: "bolder", color:'#05007C'}}>ما الذي تقدمة SeaPay ؟</h1>
        <div style={{ paddingTop: 30 }}>
          <div className='row justify-content-between'>
            <Future image={iconRevenue} title={"تسجيل ميسر"} description={"سجل معنا بخطوات بسيطة وسهلة."} />
            <Future image={icon} title={"امان"} description={"مدفوعات SeaPay آمنة وتطبق الاجرائات الأساسية لمدفوعات مشفرة."} />
            <Future image={lowFees} title={"مدفوعات ميسرة"} description={"اربط معنا وسهل عملية مدفوعاتك من خلال تظامنا."} />
            {/* <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} /> */}
          </div>
          {/* <div className='row justify-content-between'>
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
            <Future image={iconRevenue} title={"ابتكار مستمر"} description={"عزّز صدارتك في المشهد الرقمي المتغير مع منصتنا التي تستخدم حلولاً تكنولوجية سبّاقة ورائدة."} />
          </div> */}
        </div>
      </Section>
      
      <Section>
        <Fragment 
          title={{ 'text': 'مميزاتنا', 'style': {fontSize: '3rem', color:'#05007C'} }}
          description={{ 'text': '' }}
        />
        <div className="gap-4 rounded equal-cards features">
          <Fragment
            title={{ 'text':'واجهة برمجة تطبيقات', 'as':'h3' }}
            description={{ 'text': 'تكاملاً سريعًا وسهلاً بين يديك .. SeePay API واجهة برمجة تطبيقات قوية وبسيطة ومرنة.' }}
            imgAttr={{ 'src': API, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
            style={{ backgroundColor: '#fff', border: '1px solid gray' }}
            className='shadow d-flex flex-column justify-content-between'
            // flexReverse
            // styling={{ 'style':{ backgroundColor: '#fff', border: '1px solid gray', boxShadow: '0px 1px 5px' } }}
            // flex
          />
          <Fragment
            title={{ 'text':'كشف الاحتيال', 'as':'h3' }}
            description={{ 'text': 'الثقة لا تشري بالمال وفر لعملائك مستوى إضافيًا من الأمان من المعاملات الاحتيالية باستخدام SeaPay Fintech' }}
            imgAttr={{ 'src': AML, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
            style={{ backgroundColor: '#fff', border: '1px solid gray' }}
            className='shadow d-flex flex-column justify-content-between'
            // flexReverse
            // flex
          />
          <Fragment
            title={{ 'text':'لوحة التحكم', 'as':'h3' }}
            description={{ 'text': 'متابعة في الوقت الفعلي باستخدام لوحة معلومات تفاعلية تتيح لك مراقبة الأداء وتحليله لوحة تحكم سهلة ومتكاملة.' }}
            imgAttr={{ 'src': Dashboard, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
            style={{ backgroundColor: '#fff', border: '1px solid gray' }}
            className='shadow d-flex flex-column justify-content-between'
            // flexReverse
            // flex
           />
           <Fragment
            title={{ 'text':'الخصوصية', 'as':'h3' }}
            description={{ 'text': 'وهي مصممة لحماية معلومات التاجر وبياناته من خلال إنشاء بيئة ثابتة وموثوقة وآمنة تعتمد عليها عمليات عملك وخبرتك.' }}
            imgAttr={{ 'src': Privacy, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
            style={{ backgroundColor: '#fff', border: '1px solid gray' }}
            className='shadow d-flex flex-column justify-content-between'
            // flexReverse
            // flex
            />
        </div>
        {/*
        <div style={{ paddingBottom: 20 }}>
          منتجاتنا
        </div>
        <h1 className="fs-2 fs-sm-4 fs-md-5" style={{ fontWeight: "bolder" }}>اكتشف قائمة منتجاتنا</h1>
        <div className='py-4 gap-3' id='products-container'>
          <Product img={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
          <Product img={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
          <Product img={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
          <Product img={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
          <Product />
          <Product />
        </div>
        */}
      </Section>
      
      <Section style={{ backgroundColor: '#fff' }}>
        <Fragment 
          title={{ 'text': 'اكتشف قائمة منتجاتنا', style:{ color:'#05007C' } }}
        />
        <div style={{display: 'grid', gap:'20px'}}>
          <div className='gap-3 equal-cards'>
            <Fragment
              title={{ 'text': 'SeaGateway للمدفوعات', 'as': 'h3' }}
              description={{ 'text': 'امنح التجار أنسب طرق الدفع والتوسع في أسواق جديدة ببضع نقرات. اقبل جميع أنواع المدفوعات باستخدام بوابة الدفع عبر الإنترنت سي باي التي تتكامل بسهولة على جميع المنصات عبر الإنترنت.' }}
              imgAttr={{ 'src': mobileApp, 'width': '100%', style:{maxWidth:'350px'} }}
              style={{ backgroundColor:'#f2f3f5'}}
              // flex
            />
            <Fragment
              title={{ 'text': 'SeaPOS نقاط البيع الذكي', 'as': 'h3' }}
              description={{ 'text': 'امنح التجار أنسب طرق الدفع والتوسع في أسواق جديدة ببضع نقرات. اقبل جميع أنواع المدفوعات باستخدام بوابة الدفع عبر الإنترنت سي باي التي تتكامل بسهولة على جميع المنصات عبر الإنترنت.' }}
              imgAttr={{ 'src': POS, 'width': '100%', style:{maxWidth:'350px'} }}
              style={{ backgroundColor:'#f2f3f5'}}
              // flex
            />
          </div>
          <div className='gap-3 equal-cards'>
          </div>
        </div>
      </Section>

      {/* <Section><Banner /></Section> */}
      <Banner style={{ borderRadius:'0px' }} />

      <Footer />
    </>
  );
};

export default Landing;
