import React from 'react'
import { BannerContent, BannerControlDetailedContent, BannerControlHeader } from '../Styles/Banner.styled'
// import { DetailedContent } from '../Styles/InfoUnit.styled'
import Header from './Header'
import InfoUnit from './InfoUnit'

function Banner() {
  const BannerSection=(
    <BannerContent>
       <BannerControlHeader>
         <Header/>
       </BannerControlHeader>
       <BannerControlDetailedContent>
        <InfoUnit/>
       </BannerControlDetailedContent>
    </BannerContent>
  )  



  return BannerSection
}

export default Banner