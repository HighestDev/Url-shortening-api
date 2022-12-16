import styled from 'styled-components';
import colors from './Colors.styled';


export const FooterContent=styled.footer`
height:50vh;
display:flex;
align-items:center;
background-color:${colors.darkColor};
padding-bottom:50px;

@media (min-width:320px) and (max-width:623px){
 flex-direction:column;
 height:130vh;

}

@media (min-width:703px) and (max-width:768px){
height:70vh;
  flex-direction:column;
 }

`;

export const FooterLeftSection=styled.footer`
flex:0.2;
position:relative;
left:11rem;
>img{
  cursor:pointer;
}



@media (min-width:320px) and (max-width:623px){
  >img{
    position:relative;
    left:-11rem;
    top:5rem;
  }
 
 }

 @media (min-width:703px) and (max-width:768px){

 >img{
  position:relative;
  left:-11rem;
  top:2.5rem;
 }
 }


`;

export const FooterMiddleSection=styled.footer`
display:flex;
justify-content:space-between !important;
flex:0.45;
position:relative;
left:6rem;
top:4rem;

@media (min-width:320px) and (max-width:623px){
  flex-direction:column;
  position:relative;
  left:0.5rem;
  top:8rem;
 
 }

 @media (min-width:703px) and (max-width:768px){
  left:-1.5rem;
  margin-left:10px;
 }

`;

export const FooterFinalSection=styled.footer`
flex:0.2;
position:relative;
left:10rem;

>img{
  cursor:pointer;
  



@media (min-width:320px) and (max-width:623px){
 position:relative;
 top:10rem;
 left:-10.5rem;
 flex-direction:column;
 
 }

 @media (min-width:703px) and (max-width:768px){
   position:relative;
   top:8rem;
   left:-10rem;
 }
`;

export const FooterUl=styled.ul`
color:${colors.whiteBg};

>h3{
  margin-bottom:30px;
  cursor:pointer;
}
>li{
  list-style:none;
  cursor:pointer;
  color:${colors.darkAsh};

  &:hover{
    color:${colors.seaBlue};
    cursor:pointer;
  }
}



@media (min-width:320px) and (max-width:623px){
  margin-bottom:20px;
  >li{
    position:relative;
    top:-1.2rem;
  }
 
 }


 @media (min-width:703px) and (max-width:768px){
  >li{
    margin-left:50px;
  }
  >h3{
    margin-left:50px;
  }
 }
`

export const FooterMainLogo=styled.img`
width:100px;
object-fit:contain;
color:${colors.whiteBg}!important;

`;

export const FooterLogo=styled.img`
  object-fit:contain;
  width:30px;
  margin-left:15px;
  
  
  &:hover{
    color:${colors.seaBlue}!important;
    background-color:${colors.seaBlue}!important;
    
  }


`