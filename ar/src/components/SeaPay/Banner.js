import Section from 'components/common/Section'
import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <Section style={{backgroundColor: '#000', color: '#fff', borderRadius: '10px', textAlign: 'center'}}>
            <div className='mb-5'>
                <h1 className='text-white fw-bold'>هل تريد معرفة المزيد حول إرسال المدفوعات؟</h1>
            </div>
            <div className='mb-5'>
                <p className='text-white'>قدّم لعملائك تجربة دفع أسهل وأفضل مع حلولنا السريعة لإرسال المدفوعات. تواصَل مع خبرائنا وتعرّف على المزيد حول مزايا خدماتنا.</p>
            </div>
            <div className=''>
                <Link to='/' className='py-2 px-3 rounded text-black' style={{backgroundColor: '#ffffd8'}}>
                    تواصل معنا
                </Link>
            </div>
        </Section>
  )
}

export default Banner
