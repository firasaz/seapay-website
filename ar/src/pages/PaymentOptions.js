import React from 'react'
import Hero from 'components/SeaPay/Hero';
import Navigation from 'components/SeaPay/Navigation';

import dashboardImage from 'assets/img/generic/falcon-mode-dark.jpg'
import Section from 'components/common/Section';
import Fragment from 'components/SeaPay/Fragment';
import Footer from 'components/SeaPay/Footer';
function PaymentOptions() {
    return (
        <>
            <Navigation />
            
            <Hero 
                title='حوّل الأموال بشكل سلس وموسّع مع حلول إرسال المدفوعات' 
                // description='بوابة الدفع - تقارير متكاملة - أدوات ربط مع SDK - الحماية من الاحتيال و غسيل الاموال - ادارة الافرقة - حسابات متعددة - عمليات إعادة البيع - الدفع باستخدام الرابط و أكثر من 30 خدمة اخرى.' 
                msg='طور أعمالك و متاجرك بواسطة خيارت دفع متنوعة , تحت مضلة واحدة متكاملة , اقبل الدفع محليا و خليجيا و عاليما'
                btnText='ابدء تجربة فريدة من نوعها مع SeaPay'
                dashboardImage={dashboardImage}
            />

            <Section className={'p-0'} style={{ backgroundColor:'#fff' }}>
                <Fragment
                    tag='قم بزيادة معدلات قبول المدفوعات'
                    title={{ 'text':'مدفوعات عالمية ونجاحات محلية' }}
                    description={{ 'text':'عزّز حضورك في مناطق جديدة مع حلول تحظى بثقتك لمعالجة المدفوعات المحلية، وحسّن مستويات أدائك بالاستعانة بمحفظة حلولنا المُخصّصة لكل سوق والمدعومة بخبراتنا المحلية الطويلة.' }}
                    style={{ borderRadius:'5px' }}
                >
                    <Fragment 
                        title={{'text':'تغطية عالمية'}}
                        description={{'text':'أكثر من 150 عملة تشغيل، وأكثر من 20 عملة دفع'}}
                        imgAttr={{src: 'https://assets-global.website-files.com/64be421a84654af4840e80ba/64be421a84654af4840e8598_3abea74e-9a32-418f-b716-76eed3ca14ee_image.svg', width:'500px'}}
                        style={{backgroundColor:'#edf2f9'}}
                        flex
                    />
                    <Fragment 
                        title={{'text':'تغطية عالمية'}}
                        description={{'text':'أكثر من 150 عملة تشغيل، وأكثر من 20 عملة دفع'}}
                        imgAttr={{src: 'https://assets-global.website-files.com/64be421a84654af4840e80ba/64be421a84654af4840e8598_3abea74e-9a32-418f-b716-76eed3ca14ee_image.svg', width:'500px'}}
                        flex
                    />
                    <Fragment 
                        title={{'text':'تغطية عالمية'}}
                        description={{'text':'أكثر من 150 عملة تشغيل، وأكثر من 20 عملة دفع'}}
                        imgAttr={{src: 'https://assets-global.website-files.com/64be421a84654af4840e80ba/64be421a84654af4840e8598_3abea74e-9a32-418f-b716-76eed3ca14ee_image.svg', width:'500px'}}
                        
                        flex
                    />
                </Fragment>
            </Section>
            
            <div className='d-flex gap-5 p-5' style={{height:'500px'}}>
                <Fragment
                    style={{ backgroundColor: '#272932', borderRadius: '18px', flex:'1' }} // applies to outermost div element
                    title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                    description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                    imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/652580244976b49df59e9bd3_logo%20Chip.svg' }}
                />
                <Fragment
                    style={{ backgroundColor: '#272932', borderRadius: '18px', flex:'1' }} // applies to outermost div element
                    title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                    description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                    imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/6525804552f7acbb92f35b28_logo%20Chip%20(1).svg'}}
                />
                <Fragment
                    style={{ backgroundColor: '#272932', borderRadius: '18px', flex:'1' }} // applies to outermost div element
                    title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                    description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                    imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/6525805e724e0cccd751850a_logo%20Chip%20(2).svg'}}
                />
                <Fragment
                    style={{ backgroundColor: '#272932', borderRadius: '18px', flex:'1' }} // applies to outermost div element
                    title={{ 'text':'95', 'style': {color: '#fff', fontSize:'72px'} }}
                    description={{ 'text':'New markets reached overnight for payouts', 'style': {color: '#fff', fontSize: '25px', fontWeight:'600'} }}
                    imgAttr={{ src: 'https://assets-global.website-files.com/64db80a5e88c6b1723ff7649/65258090eb1519cb70551e14_logo%20Chip%20(3).svg'}}
                />
            </div>
                

            <Footer />
        </>
    )
}

export default PaymentOptions
