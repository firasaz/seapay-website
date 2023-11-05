import Section from 'components/common/Section'
import React from 'react'

function Fragment({tag, title, description, imgAttr, children}) {
  return (
    <Section>
        {tag && (
            <h6>{tag}</h6>
        )}
        <div className='mb-5'>
            <h1 className='mb-5 fw-bold' style={{fontSize: '50px'}}>{title}</h1>
            <p className='fs-1'>{description}</p>
        </div>
        {imgAttr && (
            <>
                <div>
                    {console.log(imgAttr)}
                    <img src={imgAttr.src.f1Img} width={imgAttr.width} style={{borderRadius: '5px'}} />
                </div>
            </>
        )}
        <div>
            {children}
        </div>
    </Section>
  )
}

export default Fragment
