import React from 'react'
import { Link } from 'react-router-dom';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import { bgWhiteIcons } from 'data/socialIcons';
import {
    productsRoutes,
    solutionsRoutes,
    developersRoutes,
    companyRoutes
  } from 'routes/siteMaps';
function Footer() {
  return (
    <Section style={{color:'#fff', backgroundColor:'#05007C'}}>
      <div style={{ display:'grid', gap:'20px' }}>
        <h1 style={{color:'#fff'}}>سهل عمليات الدفع مع <span className='fw-bold'>SeaPay</span></h1>
      </div>
      <div className='equal-cards footer-cols'>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#fff', fontWeight:'bold' }}>{productsRoutes.label}</h4>
          {productsRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#fff', fontWeight:'bold' }}>{solutionsRoutes.label}</h4>
          {solutionsRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#fff', fontWeight:'bold' }}>{companyRoutes.label}</h4>
          {companyRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#fff', fontWeight:'bold' }}>{developersRoutes.label}</h4>
          {developersRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
      </div>
      <div className='d-flex flex-column gap-4 mt-4'>
        <Link 
          to='/contact-us'
          className='footer-btn'
          style={{ 
          // marginTop:'20px', 
          padding:'20px', 
          color:'#0B1727', 
          fontSize:'25px', 
          fontFamily:'Inter', 
          backgroundColor:'#fff', 
          borderRadius:'8px' ,
          border: 'none',
          width: 'fit-content'
        }}>تواصل معنا</Link>
        <IconGroup className="text-2xl" icons={bgWhiteIcons} />
      </div>
    </Section>
  )
}

export default Footer
