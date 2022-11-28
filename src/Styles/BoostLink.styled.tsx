import styled from 'styled-components';
import colors from './Colors.styled';


export const BoostLinkContent=styled.div`
background-image: url(./images/bg-boost-desktop.svg);
height: 260px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-color: #3A3054;
display: flex;
flex-direction: column;
justify-items: center;
margin-top: 0%;

>h3{
    text-align:center;
    color:${colors.whiteBg};
    font-size:35px;
    position:relative;
    top:3rem;
}



@media (min-width:320px) and (max-width:623px){
   >h3{
    font-size:23px;
    position:relative;
    top:4rem;

   }
  
  }
`;

export const BoostButton=styled.button`
position:relative;
left:33.5rem;
top:5rem;
height:9.5vh;
width:20vw;
position:relative;
text-transform:capitalize;
font-size:18px;
color:${colors.whiteBg};
border-radius:50px;
outline:none;
border:none;
background-color:${colors.seaBlue};

&:hover{
  background-color:${colors.lightBlue};
  cursor:pointer;
}

@media (min-width:320px) and (max-width:623px){
    position:relative;
    left:3rem;
    top:6rem;
    width:70vw;
  
  }

  //    Tablet screen medium
  @media (min-width:703px) and (max-width:768px){
     
        position:relative;
        left:15.5rem;
        width:35vw;
      
  }
  
`