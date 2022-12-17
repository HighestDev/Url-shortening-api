import React,{useState} from 'react'
import { ContainerForResult,CopiedButton,SubContainerResult } from '../Styles/Input.styled'
import {GetShortenLinkTypes as  Iprops } from '../model'





const ShortLink:React.FC<Iprops> =({result})=> {
  const [copy,setCopy]=useState<string>('Copy')
  const [color,setColor]=useState<boolean>(false)

  const copyClip=()=>{
    navigator.clipboard.writeText(result.short_link)
    setCopy('Copied!')
    setColor(true)
    console.log('Copied!')
  }

  return (
    <ContainerForResult>
        <p>{result.original_link}</p>
          <div className='liner'></div>
         <SubContainerResult>
          <p>{result.full_short_link}</p>
          <CopiedButton className={color ? "selected":"notSelected"} onClick={copyClip}>{copy}</CopiedButton>
         </SubContainerResult>
     </ContainerForResult>
  )
}

export default ShortLink