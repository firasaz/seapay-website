import React from 'react'
import classNames from 'classnames'

function Fragment({tag, title, description, imgAttr, style, className, flex, flexReverse, children}) {
  return (
    <div style={style} className={classNames('p-4 rounded', className)}>
        <div id='fragment' className={classNames(flex && 'd-flex gap-2', 'h-100', flexReverse && 'flex-column flex-column-reverse')}>
            <div className={flex && 'flex-1'}>
                {tag && (
                    <h6>{tag}</h6>
                )}
                <div className='mb-4 me-5 text-container'>
                    { title.as ? React.createElement(title.as, { className: classNames('mb-4 fw-bold', title?.className) }, title.text) :  
                    <h1 className={classNames('mb-4 fw-bold', title?.className)} style={{ color:'currentcolor', ...title.style}}>{title.text}</h1> }
                    <h5 className={classNames('fw-semibold text-transition', description?.className)} style={{ color: 'currencolor', ...description?.style }}>{description?.text}</h5>
                </div>
            </div>
            {imgAttr && (
                <div className={flex && 'flex-1 d-flex'}>
                    <img src={imgAttr.src} width={imgAttr.width} style={imgAttr.style} />
                </div>
            )}
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Fragment
