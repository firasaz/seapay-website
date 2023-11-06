import Section from 'components/common/Section'
import React from 'react'
import classNames from 'classnames';

function Fragment({tag, title, description, imgAttr, style, flex, children}) {
  return (
    <Section className={'pt-0'}>
        <div className={classNames('p-5', flex && 'd-flex gap-5')} style={style}>
            <div className={flex && 'flex-1'}>
                {tag && (
                    <h6>{tag}</h6>
                )}
                <div className='mb-5 me-5'>
                    <h1 className='mb-3 fw-bold' style={{fontSize: '3.5rem'}}>{title}</h1>
                    <h5 className='fw-semibold'>{description}</h5>
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
    </Section>
  )
}

export default Fragment

// How To Use It:

// <div className="d-flex flex-column gap-3">
//     <Fragment
//         title='تحسين شامل'
//         description='قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.'
//         // imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
//         style={{backgroundColor: '#fff', borderRadius: '4px', textAlign:'center'}}
//         flex
//     />
//     <Fragment
//         title='تحسين شامل'
//         description='قد تفشل عملية الدفع لأسباب عدة. تعمل خاصية Intelligent Acceptance في الوقت الفعلي عبر رسائل الدفع والتوجيه وإعادة المحاولة، بالإضافة إلى استخدام ابتكارات دفع جديدة لضمان أعلى فرصة للنجاح.'
//         imgAttr={{ src: f1Img, style: {borderRadius: '4px', width:'100%', maxWidth:'500px'} }}
//         style={{backgroundColor: '#fff', borderRadius: '4px'}}
//         flex
//     />
// </div>
