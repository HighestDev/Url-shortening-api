import styled from 'styled-components';


import colors from './Colors.styled';

export const BannerContent=styled.div`
  height:85vh;
  background-color:${colors.whiteBg};

  @media (min-width:320px) and (max-width:623px){
     height:120vh;
   }

   @media (min-width:375px) and (max-width:623px){
    height:130vh;
  }

   @media (min-width:425px) and (max-width:623px){
    height:145vh;
  }
  
`

export const BannerControlHeader=styled.div`
  position:relative;
  top:2.5rem;

  //  Tablet screen largescreen
  @media (min-width:768px) and (max-width:703px){
    background-color:red;
  }
`;

export const BannerControlDetailedContent=styled.div`

`;