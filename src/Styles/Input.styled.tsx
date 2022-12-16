import styled from 'styled-components'

import inputbackground from '../assests/bg-shorten-desktop.svg';
import colors from './Colors.styled';

export const InputContent=styled.div`
background:url(${inputbackground});
background-repeat: no-repeat;
background-size: cover;
display:flex;
background-position: center;
background-color:${colors.inputBg};
max-width: 1000px;
height: 150px;
text-align: center;
justify-content: space-evenly;
overflow: hidden;
border-radius: 10px;
position: relative;
bottom: -70px;
top:-5rem;
left:11rem;
z-index:1;
padding: 50px;
padding-right: 35px;
padding-bottom: 90px;

// mobile screen small size
@media (min-width:320px) and (max-width:623px){
     position:relative;
     left:1.3rem;
     top:-8rem;
     flex-direction:column;
     max-width:280px;
     height:40vh;

     
     
   }
  

// mobile screen medium
@media (min-width:375px) and (max-width:623px){
max-width:320px;
position:relative;
top:-7.5rem;
left:1.8rem;
font-size:13px;
}

// mobile screen largesize
@media (min-width:425px) and (max-width:623px){
  max-width:360px;  
  position:relative;
  left:2rem;
}

//  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  left:2rem;
  width:90vw;
 }

`

export const SearchInput=styled.input`
width: 700px;
border-radius: 10px;
font-size: 20px;
border:none;
outline:none;
color: #9E9AAf;
height: 64px;
padding-left: 25px;
font-weight: 600;

&::placeholder{
    // color:${colors.darkAsh};
    font-weight:100;
    font-size:15px;
}


@media (min-width:320px) and (max-width:623px){
    width:250px;
    position:relative;
    left:-2rem;
    height:100%;
    padding:13px;
    margin-bottom:10px;
    font-size:13px;

    &::placeholder{
     font-size:13px;
    }
   }

//    mobile screen medium
@media (min-width:375px) and (max-width:623px){
  width:270px; 
}
  
//    mobile screen largeScreen
@media (min-width:425px) and (max-width:623px){
  width:310px; 
  position:relative;
  left:-1.5rem;
}

`

export const ButtonInput=styled.button`
margin-left: 25px;
width: 200px;
padding: 10px 35px 10px 35px;
background-color: #2BD0D0;
color: #FFF;
border-radius: 10px;
border: 2px solid #2BD0D0;
font-weight: 700;
cursor: pointer;
height: 64px;
font-size: 20px;

&:hover{
  background-color:${colors.lightBlue};
  cursor:pointer;
}


@media (min-width:320px) and (max-width:623px){
    width:230px;
    position:relative;
    left:-3rem;
    height:10vh;
    top:2rem;
    font-size:16px;
   }
  

   //    mobile screen medium
@media (min-width:375px) and (max-width:623px){
  width:265px; 
}


//    mobile screen largeScreen
@media (min-width:425px) and (max-width:623px){
  width:300px; 
}

//  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  font-size:14px;
 }
`

export const ResultData=styled.div`
position:relative;
top:-2.5rem;

`;

export const ContainerResult=styled.div`

`;

export const FormContainer=styled.form``

export const ContainerForResult=styled.div`
display:flex;
justify-content:space-between;
max-width:1000px;
margin:0 auto;
padding:20px;
margin-bottom:15px;
background-color:${colors.whiteBg};
border-radius:10px;
>p{
  font-size:14px;
  position:relative;
  left:2rem;
  top:0.5rem;
}
//Mobile Screen Small Size
@media (min-width:320px) and (max-width:623px){
 flex-direction:column;
 height:33vh;
 max-width:280px;
 font-size:13px;
 margin-bottom:25px;

 }

 @media (min-width:375px) and (max-width:623px){
 position:relative;
 top:2.5rem;
 max-width:300px;
 margin-bottom:30px;
 }

 @media (min-width:425px) and (max-width:623px){
  max-width:350px;
  margin-bottom:30px;
 }

//  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  max-width:680px;
  padding:10px;
 }

`

export const SubContainerResult=styled.div`
 display:flex;
 >p{
  position:relative;
  left:-5rem;
  top:0.5rem;
  color:${colors.seaBlue}
 }

 //Mobile Screen Small Size
 @media (min-width:320px) and (max-width:623px){
  flex-direction:column;

  >p{
    left:2rem;
    top:-1rem;
  }
  }


 //  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){

 }
`;

export const CopiedButton=styled.button`
 width:8vw;
 height:6vh;
 color:${colors.whiteBg};
 background-color:${colors.seaBlue};
 outline:none;
 border:none;
 border-radius:5px;

 @media (min-width:320px) and (max-width:623px){
  width:70vw;
  height:8vh;
  position:relative;
  left:0.5rem;
 }


 @media (min-width:375px) and (max-width:623px){

  left:0rem;
 }

 @media (min-width:425px) and (max-width:623px){
  width:70vw;
  left:0.3rem;
 }


 //  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  width:10vw;
  position:relative;
  left:-0.8rem;
 }
`

export const ErrorMessage=styled.p`
 position:absolute;
 font-size:13px;
 color:${colors.redText};
 left:-30rem;
 top:7.5rem;
 width:100vw;
 font-style:italic;

 @media (min-width:320px) and (max-width:623px){
   left:-2rem;
   font-size:13px;
   top:6.7rem;
 }

 @media (min-width:425px) and (max-width:623px){
  top:6.6rem;
 }


 //  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  font-size:17px;
  top:7rem;
  left:-15rem;
  padding:5px;
 }

`;