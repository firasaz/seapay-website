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
    <Section style={{color:'#fff', backgroundColor:'#0f1654'}}>
      <div>
        <h1 style={{color:'#fff'}}>سهل عمليات الدفع مع <span className='fw-bold'>SeaPay</span></h1>
        <button 
          className='footer-btn'
          style={{ 
          marginTop:'20px', 
          padding:'20px', 
          color:'#fff', 
          fontSize:'25px', 
          fontFamily:'Inter', 
          backgroundColor:'#0700A0', 
          borderRadius:'20px' ,
          border: 'none'
        }}>Contact Us</button>
      </div>
      <div className='d-flex justify-content-between'>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#c4c4c4', fontWeight:'bold' }}>{productsRoutes.label}</h4>
          {productsRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#c4c4c4', fontWeight:'bold' }}>{solutionsRoutes.label}</h4>
          {solutionsRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#c4c4c4', fontWeight:'bold' }}>{developersRoutes.label}</h4>
          {developersRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
        <div className='d-flex flex-column my-4'>
          <h4 className='my-4' style={{ color:'#c4c4c4', fontWeight:'bold' }}>{companyRoutes.label}</h4>
          {companyRoutes.children[0].children.map((route, index) => (
            <Link to={route.to} key={index} className='my-2 opacity-75'><h5 className='text-white'>{route.name}</h5></Link>
          ))}
        </div>
      </div>
      <IconGroup className="mt-4 text-2xl" icons={bgWhiteIcons} />
    </Section>
  )
}

export default Footer
