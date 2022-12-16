import styled from 'styled-components';
import colors from '../Styles/Colors.styled';

export const DetailedContent=styled.div`
display:flex;
justify-content:space-between;
margin-top:5rem;


// mobile screen SmallSize
@media (min-width:320px) and (max-width:623px){
  flex-direction:column-reverse;
 }

//  mobile screen largeSize
@media (min-width:375px) and (max-width:623px){
   
 }

`;

export const DetailedLeftSection=styled.div`
margin-left:11em;
margin-top:3em;
>h1{
  width:45vw;
  font-size:70px;
  line-height:80px;
  margin-bottom:10px;
}

>p{
    width:35vw;
    color:${colors.darkAsh};
    margin-bottom:15px;
}

@media (min-width:320px) and (max-width:623px){
   >h1{
    font-size:30px;
    position:relative;
    left:-8rem;
    width:70vw;
    line-height:35px;
    margin-bottom:20px;
   }

   >p{
    tex-align:center;
    width:83vw;
    position:relative;
    left:-9rem;
    font-size:13px;
    line-height:20px;
   }
 }


 //  mobile screen mediumSize
@media (min-width:375px) and (max-width:623px){
   >h1{
    position:relative;
    left:-6rem;
   }

   >p{
    width:250px;
    position:relative;
    left:-6.5rem;
   }
 }


 @media (min-width:425px) and (max-width:623px){
  >h1{
    position:relative;
    left:-5rem;
  }
  >p{
    width:350px;
    margin-left:-2rem;
  }
 }


 //  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
    >h1{
      width:75vw;
      margin-bottom:10px;
      position:relative;
      left:-1rem;
      
    }
    >p{
      width:70vw;
    }
 }

`;

export const DetailedRightSection=styled.div`

@media (min-width:320px) and (max-width:623px){
  >img{
    width:130vw;
  }
 }
`;

export const DetailedButton=styled.button`
height:7.5vh;
text-transform:capitalize;
width:12vw;
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


@media (min-width:320px) and (max-width:623px){
   width:55vw;
   height:8vh;
   position:relative;
   left:-6.5rem;
   top:2rem;
   font-size:18px;
   margin-bottom:30px;
 }

 //  mobile screen largeSize
@media (min-width:375px) and (max-width:623px){
   width:60vw;
   height:10vh;
 }


 //  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
    position:relative;
    left:5.5rem;
    top:2rem;
    height:10vh;
    width:40vw;
    font-size:18px;
 }

`;

export const DetailedImage=styled.img`
position:relative;
left:1.3rem;
width:45vw;
object-fit:contain;


//  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  display:none;
 }

`;