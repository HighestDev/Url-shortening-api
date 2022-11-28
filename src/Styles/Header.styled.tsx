import styled from "styled-components";
import colors from '../Styles/Colors.styled';



export const HeaderContent=styled.div`
  background-color:${colors.whiteBg};
  height:7vh;
  display:flex;
  justify-content:space-between;
  max-width:1000px;
  margin:0 auto;


  //  mobile screen largescreen
  @media (min-width:703px) and (max-width:768px){
     max-width:650px;
     margin:0 auto;
  }

`;

export const HeaderLeftSection=styled.div`
`;

export const HeaderRightSection=styled.div`
display:flex;
justify-content:space-between;

// mobile screen small size
@media (min-width:320px) and (max-width:623px){
  display:none;
 }






`;

export const HeaderUlSection=styled.ul`
  display:flex;
  align-items:center;
  color:#fff;
  position:relative;
  top:-1.3rem;
  left:10em;

  >li{
    list-style:none;
    margin-left:20px;
    font-weight:300;
    font-size:14px;
    color:${colors.darkAsh};

    &:hover{
      color:${colors.darkMoove};
      font-weight:700;
      cursor:pointer;
    }
  }

  @media (min-width:320px) and (max-width:623px){
    display:none;
   }

`;

export const HeaderSignUpButton=styled.button`
height:6.5vh;
width:9vw;
position:relative;
left:-0rem;
top:-0rem;
color:${colors.whiteBg};
border-radius:50px;
outline:none;
border:none;
background-color:${colors.seaBlue};

&:hover{
  background-color:${colors.lightBlue};
  cursor:pointer;
}

//  mobile screen largescreen
@media (min-width:703px) and (max-width:768px){
  //  position:relative;
  //  left:-6.5rem;
  top:0.3rem;
  width:10vw;
  height:5vh;
}
`

export const HeaderLoginText=styled.p`
position:relative;
left:-2rem;
top:0.8rem;
font-weight:300;
font-size:14px;
color:${colors.darkAsh};

&:hover{
  color:${colors.darkMoove};
  cursor:pointer;
}

`
export const HeaderLogo=styled.img`
width:100px;
object-fit:contain;
position:relative;
top:0.5rem;

@media (min-width:320px) and (max-width:623px){
    position:relative;
    left:1.5rem;
 }

`

export const MobileMenu=styled.div`
display:none;

@media (min-width:320px) and (max-width:623px){
  display:block;
  width:100px;
  font-size:20px;
  object-fit:contain;
  position:relative;
  top:0.2rem;
  color:${colors.darkAsh};
  position:relative;
  left:3.5rem;
 }
 
`


export const DropDown=styled.ul`
display:none;

@media (min-width:320px) and (max-width:623px){
  display:block;
  z-index:1;
  position:absolute;
  background-color:${colors.darkMoove};
  width:86vw;
  height:55vh;
  left:1.3rem;
  top:4rem;
  border-radius:10px;

  >div{
    background:${colors.darkAsh};
    width:70vw;
    height:1px;
    position:relative;
    top:2.8rem;
    left:1.5rem;
  }

  >li{
    list-style:none;
    padding:10px;
    position:relative;
    left:6rem;
    top:2rem;
    color:${colors.whiteBg};
    font-weight:bolder;
  }

 li:last-of-type{
  position:relative;
  top:3rem;
 }

 

  >button{
    width:70vw;
    position:relative;
    left:1.5rem;
    top:4rem;
    height:8vh;
    color:${colors.whiteBg};
    background-color:${colors.seaBlue};
    border:none;
    outline:none;
    border-radius:20px;
  }
}


@media (min-width:375px) and (max-width:623px){
  left:1.5rem;
  height:62vh;
  >li{
    left:7.3rem;
  }
  
}

@media (min-width:425px) and (max-width:623px){
  height:68vh;

  >li{
    padding:15px;
    left:8rem;
  }

  >button{
    height:10vh;
    font-size:16px;
  }
}

`