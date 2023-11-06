import React from 'react'
import classNames from 'classnames'

function Fragment({tag, title, description, imgAttr, style, flex, children}) {
  return (
    <div className={'p-5'} style={style}>
        <div className={classNames('', flex && 'd-flex gap-5')}>
            <div className={flex && 'flex-1'}>
                {tag && (
                    <h6>{tag}</h6>
                )}
                <div className='mb-4 me-5'>
                    <h1 className={classNames('mb-4 fw-bold', title.className)} style={{fontSize: '2.5rem', ...title.style}}>{title.text}</h1>
                    <h5 className={classNames('fw-semibold', description.className)} style={description.style}>{description.text}</h5>
                </div>
            </div>
            {imgAttr && (
                <div className={flex && 'flex-1 m-auto'}>
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
