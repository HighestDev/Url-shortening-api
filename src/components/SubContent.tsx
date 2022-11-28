import React from 'react'
import { CardTypes } from '../model'
import { ContentCard,SvgContent } from '../Styles/Content.styled'

const SubContent:React.FC<CardTypes> =({title,base,Image})=>{
  return (
    <ContentCard>
        <h3>{title}</h3>
        <p>{base}</p>
        <SvgContent>
          {Image && (<img src={Image} alt="pic"/>)}
        </SvgContent>
     </ContentCard>
  )
}

export default SubContent