import React,{useEffect, useState} from 'react'
import { ButtonInput, ContainerResult, FormContainer, InputContent, ResultData, SearchInput,ErrorMessage } from '../Styles/Input.styled'
import axios from 'axios'
import ShortLink from './ShortLink'
import { GetShortenLinkTypes } from '../model'



// const baseURL='https://api.shrtco.de/v2/shorten?url='
// const getStoredLinks=()=>{
//   let links=JSON.parse(localStorage.getItem("links")) 
//   if(links){
//     return JSON.parse(localStorage.getItem("links"))
//   }else{
//     return []
//   }
// }



function Input() {
  const [text,setText]=useState<string>("")
  const [links,setLink]=useState<GetShortenLinkTypes[]>([])
  const [showData,setShowData]=useState<boolean>(false)
  const [error,setError]=useState<string>("")
  const [redBorder,setRedBorder]=useState<boolean>(false)



  const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }


  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!text){
      setShowData(false)
      setRedBorder(true)
      setError('Please Enter a link')
      console.log('Please add a text')
    }
    else{
      setShowData(true)
      const getData=async()=>{
         const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${text}`)
         setLink([...links,data])
         setText('')
         setError('')
         setRedBorder(false)
         console.log(data)
      }

      getData()
    }
  }

  // useEffect(()=>{
  //    localStorage.setItem("links",JSON.stringify(links))
  // },[links])


  const InputSection=(
    <ContainerResult>
    <FormContainer onSubmit={handleSubmit}>
    <InputContent>
    <SearchInput type="text" className={redBorder ?'redBorder':'default'} placeholder='Shorten a link here......' value={text} 
    onChange={handleOnChange}/>


    <ButtonInput>Shorten it!</ButtonInput> 
       <ErrorMessage>{error}</ErrorMessage>
    </InputContent>
    </FormContainer>
      
      {showData &&(
        <ResultData>
          <>
           {links.map((link)=>(
            <ShortLink result={link.result}/>
           ))}
          </>
        </ResultData>
      )}
 

  </ContainerResult>
  )


  return (
    <div>
      {InputSection}
   
    </div>
    )
}

export default Input


