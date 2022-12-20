import React from 'react'
import SubContent from './SubContent';
import customizeIcon from '../assests/icon-fully-customizable.svg'
import detailedIcon from '../assests/icon-detailed-records.svg'
import brandIcon from '../assests/icon-brand-recognition.svg'
import { BlueBar, BrandedContent, CustomizedContent, DetailedContent, StatsContent,writtingContainer } from '../Styles/Content.styled';
import { CardTypes } from '../model';


function Content() {

    const information:CardTypes[]=[
        {
          title:'Brand Recognition',
          title1:'Detailed Records',
          title2:'Fully Customized',

          base:"Boost your brand recognition with each click.Generic links don't mean a thing. Branded linkks help instill confideence in your Cotent",
          base1:"Gain insights into who is clicking your links. knowinig when and where people engage with your content helps inform better decisions",
          base2:"Imporve brands awareness and content discoverability through customizable links, superchanging audience engagement.",
          Image:''
        }
    ]

const writting=(
  <div className='stats'>
     <h1>Advanced Statistics</h1>
     <p>Track your links are performing the web with our advanced statistics dashboard</p>
  </div>

)

const result=information.map((info)=>{
    return(
        <StatsContent>

        <BrandedContent>
        
            <SubContent
            title={info.title}
            base={info.base}
            Image={brandIcon}
           />
        </BrandedContent>

        <DetailedContent>
        <SubContent
            title={info.title1}
            base={info.base1}
            Image={detailedIcon}
           />
        </DetailedContent>

        <CustomizedContent>
        <SubContent
            title={info.title2}
            base={info.base2}
            Image={customizeIcon}
           />

        </CustomizedContent>

      
      </StatsContent>




    )
})

const bar=(
  <div className='bluebar'>
  </div>
)

  return (
    <div>
      {writting}
      {result}
      {bar}
  </div>
  )
}

export default Content