import React from 'react';
import Banner from '../components/Banner';
import BaseContent from '../components/BaseContent';
import BoostLink from '../components/BoostLink';
import Footer from '../components/Footer';
import { LandingPageContainer } from '../Styles/reserves.styled';


const LandingPage=()=> {
  return (
    <LandingPageContainer>
      <Banner/>
      <BaseContent/>
      <BoostLink/>
      <Footer/>
      </LandingPageContainer>
  )
}

export default LandingPage