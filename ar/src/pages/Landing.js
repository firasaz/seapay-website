import Section from 'components/common/Section';
import Future from 'components/SeaPay/Future';
import Product from 'components/SeaPay/Product';
import Navigation from 'components/SeaPay/Navigation';
import Hero from 'components/SeaPay/Hero';
import Footer from 'components/SeaPay/Footer'

import iconRevenue from 'assets/img/icons/icon-revenue.svg';
import 'assets/css/seapay.css';
import dashboardImage from 'assets/img/generic/dashboard.png';
import paymentsImage from "assets/img/generic/payments.png";

const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero 
        title='اقبل الدفع بواسطة' 
        span
        description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
        msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
        btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
        dashboardImage={dashboardImage}
      />
      <Section style={{backgroundColor: "white"}}>
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
        <div className='py-4 gap-3' id='products-container'>
            <Product image={paymentsImage} title={"معالجة المدفوعات"} description={"وسّع نطاق أعمالك واثبت حضورك في مناطق جديدة من خلال حلول مدفوعات محلية وموثوقة. تساعدك معرفتنا المحلية والعميقة على زيادة النمو من خلال تصميم الحل المناسب لك حسب كل سوق."} />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Landing;
