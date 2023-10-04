import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { Dresses } from '../../../Data/Dresses';
import { mensJeans } from '../../../Data/mensJeans';
import { womenTop } from '../../../Data/WomenTop';
import { womenLahenga } from '../../../Data/WomenLahenga';
import Product from '../../components/Product/Product';

function HomePage() {
  return (
    <div>
      
      <MainCarosel/>
      <Product/>
      <div className="space-y-10 py-20 flex-col justify-center px-5 lg:px-10">
       <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
       <HomeSectionCarosel data={Dresses}sectionName={"Women's Dress"}/>
       <HomeSectionCarosel data={womenTop} sectionName={"Women's Top"}/>
       <HomeSectionCarosel data={mensJeans} sectionName={"Men's Jeans"}/>
       <HomeSectionCarosel data={womenLahenga} sectionName={"Women's Jeans"}/>
       
      
      
      </div>
    </div>
  )
}

export default HomePage
