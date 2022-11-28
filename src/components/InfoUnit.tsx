import React from 'react'
import { DetailedButton, DetailedContent, DetailedImage, DetailedLeftSection, DetailedRightSection } from '../Styles/InfoUnit.styled'

function InfoUnit() {
    const DetailedInfo=(
        <DetailedContent>
            <DetailedLeftSection>
              <h1>More than just  shorter links</h1>
              <p>Build your brand's recongnition and get detailed insights on how your links are performing</p>
              <DetailedButton>
                get started
              </DetailedButton>
            </DetailedLeftSection>

            <DetailedRightSection>
               <DetailedImage src="./images/illustration-working.svg"/>
            </DetailedRightSection>
        </DetailedContent>

    )

  return (
     DetailedInfo
  )
}

export default InfoUnit