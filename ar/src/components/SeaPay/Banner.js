import Section from 'components/common/Section'
import React from 'react'
import { Link } from 'react-router-dom'

function Banner({ style, to }) {
  return (
    <Section style={{ borderRadius: '10px', textAlign: 'center', ...style}}>
        <div className='mb-5'>
            <h1 className='fw-bold' style={{ color:'currentcolor' }}>هل تريد معرفة المزيد حول إرسال المدفوعات؟</h1>
        </div>
        <div className='mb-5'>
            <p className='' style={{ color:'currentcolor' }}>قدّم لعملائك تجربة دفع أسهل وأفضل مع حلولنا السريعة لإرسال المدفوعات. تواصَل مع خبرائنا وتعرّف على المزيد حول مزايا خدماتنا.</p>
        </div>
        <div className=''>
            <Link to={to} className='py-2 px-3 rounded text-white button' style={{backgroundColor: '#05007C', color:'currentcolor' }}>
                تواصل معنا
            </Link>
        </div>
    </Section>
  )
}

export default Banner
