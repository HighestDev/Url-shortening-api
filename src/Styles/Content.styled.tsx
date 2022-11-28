import styled from 'styled-components';
import colors from './Colors.styled';


 export const BaseContentContainer=styled.div`
 background-color:${colors.baseBg};
 margin-top:8em;
 height:180vh;

 @media (min-width:320px) and (max-width:623px){
   height:350vh;
 }

 @media (min-width:703px) and (max-width:768px){
  height:320vh;
 }
 `;

 export const StatsContent=styled.div`
  display:flex;
  justify-content:space-between;
  max-width:1110px;
  margin:0 auto;

  @media (min-width:320px) and (max-width:623px){
    position:relative;
    top:0rem;
    flex-direction:column;
    left:10rem;
  }

  //  Tablet screen largescreen
  @media (min-width:703px) and (max-width:768px){
    flex-direction:column;
    position:relative;
    left:10rem;
    z-index:1;
  }

 `;

 export const BrandedContent=styled.div`
 @media (min-width:320px) and (max-width:623px){
    position:relative;
    left:-8rem;
    z-index:1;
    top:-1rem;
   
  
  }

  //  mobile screen largescreen
@media (min-width:425px) and (max-width:623px){
   position:relative;
   left:-6.5rem;
}

 `;

 export const DetailedContent=styled.div`
 position:relative;
 top:2rem;
 z-index:1;

 @media (min-width:320px) and (max-width:623px){
   position:relative;
   left:-8rem;
 }


 //  mobile screen largescreen
 @media (min-width:425px) and (max-width:623px){
    position:relative;
    left:-6.5rem;
 }

 `;

 export const CustomizedContent=styled.div`
 position:relative;
 top:5rem;

 @media (min-width:320px) and (max-width:623px){
   position:relative;
   left:-8rem;
   z-index:1;
 }

 //  mobile screen largescreen
 @media (min-width:425px) and (max-width:623px){
    position:relative;
    left:-6.5rem;
 }

 `;
 
 export const ContentCard=styled.div`
 background-color:${colors.whiteBg};
 height:45vh;
 margin-bottom:10px;
 width:25vw;
border-radius:10px;
 >h3{
    text-align:center;
    position:relative;
    top:4rem;
    left:-2.8rem;
 }

 >p{
    text-align:center;
    color:${colors.darkAsh};
    width:300px;
    font-size:15px;
    margin-left:20px;
    position:relative;
    top:5.5rem;
 }


 @media (min-width:320px) and (max-width:623px){
   width:250px;
   height:50vh;
   padding:10px;
  

   >h3{
      position:relative;
      left:-0.3rem;
      
   }

   >p{
      width:200px;
      font-size:13px;
      position:relative;
      left:-0.3rem;
   }
  
  }

  //    mobile screen medium
@media (min-width:375px) and (max-width:623px){
  width:310px; 
  

  >p{
   width:250px;
  }
}


//    mobile screen largeScreen
@media (min-width:425px) and (max-width:623px){
  width:320px; 
  margin-bottom:25px;
}
 
//  Tablet screen largescreen
 @media (min-width:703px) and (max-width:768px){
  width:400px;
  margin-bottom:55px;
 }
 `

 export const writtingContainer=styled.div`
  background:red;
 `;


 export const  SvgContent=styled.div`
 >img{
    background-color:${colors.darkMoove};
    padding:10px;
    border-radius:50px;
    position:relative;
   top:-10rem;
    left:1.5rem;
   
 }


 @media (min-width:320px) and (max-width:623px){
     >img{
      position:relative;
      left:5rem;
      top:-10.3rem;
     }
  
  }


  //    mobile screen medium
@media (min-width:375px) and (max-width:623px){
    >img{
      position:relative;
      left:7.5rem;
    }
}


//    tablet screen medium
@media (min-width:703px) and (max-width:768px){
    >img{
      position:relative;
      left:10.5rem;
    }
}



 `

 export const BlueBar=styled.div`
 height:10px;
 width:50%;
 postion:relative;
 left:-22rem !important;
 top:10rem!important;
 color:${colors.seaBlue};
 background-color:${colors.seaBlue};

 //  mobile screen largescreen
 @media (min-width:425px) and (max-width:623px){

 }

 `;