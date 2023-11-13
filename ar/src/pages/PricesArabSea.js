import React from 'react'
import Hero from 'components/SeaPay/Hero'
import Fragment from 'components/SeaPay/Fragment'
import Section from 'components/common/Section'
import Navigation from 'components/SeaPay/Navigation'
import Footer from 'components/SeaPay/Footer'
import PriceCard from 'components/SeaPay/PriceCard'

import { pricingAltData } from 'data/pricing'
import priceHero from 'assets/img/generic/10.jpg'

function PricesArabSea() {
  return (
    <>
      <Navigation />
      <Hero 
          title='أسعار تنافسية فقط مع SeaPay'
          description='سجل مع SeaPay واحصل على افضل الأسعار.'
          dashboardImage={priceHero} 
      />
      <Section>
        <div id='pricingCards' className='bg-white rounded p-3'>
          {pricingAltData.map(pricing => (
              <PriceCard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default PricesArabSea