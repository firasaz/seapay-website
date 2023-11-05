import Section from 'components/common/Section'
import React from 'react'

function Fragment({tag, title, description, imgAttr, style, children}) {
  return (
    <Section style={style}>
        <div>
            {tag && (
                <h6>{tag}</h6>
            )}
            <div className='mb-5'>
                <h1 className='mb-3 fw-bold' style={{fontSize: '50px'}}>{title}</h1>
                <p className='fs-1'>{description}</p>
            </div>
        </div>
        {imgAttr && (
            <div>
                <img src={imgAttr.src} width={imgAttr.width} style={imgAttr.style} />
            </div>
        )}
        <div>
            {children}
        </div>
    </Section>
  )
}

export default Fragment
