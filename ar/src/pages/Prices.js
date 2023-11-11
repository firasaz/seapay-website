import React from 'react'

import { pricingData } from 'data/pricing'
import priceHero from 'assets/img/generic/1.jpg'
import PriceCard from 'components/SeaPay/PriceCard'
import Section from 'components/common/Section'
import Navigation from 'components/SeaPay/Navigation'
import Footer from 'components/SeaPay/Footer'
import Hero from 'components/SeaPay/Hero'
function Prices() {
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
                {pricingData.map(pricing => (
                    <PriceCard key={pricing.id} pricing={pricing} />
                ))}
                </div>
        </Section>
        <Footer />
    </>
  )
}

export default Prices