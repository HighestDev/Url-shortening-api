import React from 'react'
import { BaseContentContainer } from '../Styles/Content.styled'
import Content from './Content'


import Input from './Input'

function BaseContent() {
    const BannerSection=(
       <BaseContentContainer>
       <Input/>
       <Content/>
       </BaseContentContainer>
    )

  return BannerSection
}

export default BaseContent