import React from 'react'
import { FooterContent, FooterFinalSection, FooterLeftSection, FooterLogo, FooterMainLogo, FooterMiddleSection, FooterUl } from '../Styles/Footer.styled'
import shortenLogo from '../assests/edited-footer.svg';



function Footer() {
     const footerSection=(
       <FooterContent>
        <FooterLeftSection>
        <img src={shortenLogo} alt=''/>   
        </FooterLeftSection>

        <FooterMiddleSection>
          <FooterUl>
            <h3>Features</h3>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </FooterUl>

          <FooterUl>
            <h3>Resources</h3>
            <li>Blog</li>
            <li>Developers Links</li>
            <li>Support</li>
          </FooterUl>

          <FooterUl>
            <h3>Company</h3>
            <li>About</li>
            <li>Our team</li>
            <li>Careers</li>
            <li>Contact</li>
          </FooterUl>

        </FooterMiddleSection>
        
        <FooterFinalSection>
         <FooterLogo className='hovers' src="./images/icon-facebook.svg" alt="fb"/>
         <FooterLogo className='hovers' src="./images/icon-twitter.svg" alt="twitter"/>
         <FooterLogo className='hovers' src="./images/icon-pinterest.svg" alt="pinterest"/>
         <FooterLogo className='hovers' src="./images/icon-instagram.svg" alt="instagram"/>
         
        </FooterFinalSection>
       </FooterContent> 
     )

  return footerSection
}

export default Footer