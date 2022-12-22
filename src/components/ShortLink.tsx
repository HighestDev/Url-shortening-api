import React,{useState,useEffect} from 'react'
import { ContainerForResult,CopiedButton,SubContainerResult } from '../Styles/Input.styled'
import {GetShortenLinkTypes as  Iprops } from '../model'





const ShortLink:React.FC<Iprops> =({result})=> {
  const [copy,setCopy]=useState('Copy')
  const [color,setColor]=useState(false)

useEffect(()=>{
const timer=setTimeout(()=>{
   setCopy('Copy')
   setColor(false)
},3000)

return ()=>clearTimeout(timer)
},[copy])



  const copyClip=()=>{
    navigator.clipboard.writeText(result.short_link)
    setCopy('Copied!')
    setColor(true)   
}


  return (
    <ContainerForResult>
        <p>{result.original_link}</p>
          <div className='liner'></div>
         <SubContainerResult>
          <a href={result.full_short_link}>{result.full_short_link}</a>
          <CopiedButton className={color ? "selected":"notSelected"} onClick={copyClip}>{copy}</CopiedButton>
         </SubContainerResult>
     </ContainerForResult>
  )
}

export default ShortLink