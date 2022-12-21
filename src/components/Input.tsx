import React,{useEffect, useState} from 'react'
import { ButtonInput, ContainerResult, FormContainer, InputContent, ResultData, SearchInput,ErrorMessage, PlaceHolder } from '../Styles/Input.styled'
import axios from 'axios'
import ShortLink from './ShortLink'
import { GetShortenLinkTypes } from '../model'
import getLocalStorage from './LocalStorage'






function Input(){
  const [input,setInput]=useState("")
  const [link,setLink]=useState<GetShortenLinkTypes[]>(getLocalStorage())

 const [showData,setShowData]=useState(true) 
 const [error,setError]=useState("")
 const [redBorder,setRedBorder]=useState(false)
 const [warn,setWarn]=useState(false)
 const [placeHolder,setPlaceHolder]=useState('Shorten a link here....')


 const orderLinks=[...link].sort((a:any,b:any)=>a.code - b.code ? 1 : -1)


  useEffect(()=>{
    localStorage.setItem("link",JSON.stringify(link))
},[link])



  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!input){
      setShowData(false)
      setRedBorder(true)
      setWarn(true)
      setError('Please add a  link')
      console.log('Please add a text')
    }

    else{
      setShowData(true)
      const getData=async()=>{
         const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
         setLink([...orderLinks,data])
         setInput('')
         setError('')
         setRedBorder(false)
         setWarn(false)
         setPlaceHolder('Shorten a link here....')
         console.log(data)
      }

      getData()
    }

  }


  const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
    setPlaceHolder('')
  }



  const InputSection=(
        <ContainerResult>
          <FormContainer onSubmit={handleSubmit}>
          <InputContent>
          <SearchInput type="text"  className={redBorder ?'redBorder':'default'}  value={input} 
          onChange={handleOnChange}/>

       

          <ButtonInput>Shorten it!</ButtonInput> 
            <ErrorMessage>{error}</ErrorMessage>
          </InputContent>
          </FormContainer>
      
          {showData &&(
            <ResultData>
              <>
              {orderLinks.map((item)=>(
                <ShortLink result={item.result}/>
              ))}
              </>
            </ResultData>
          )}
      <PlaceHolder className={warn ?'warning':''}>{placeHolder}</PlaceHolder>
  </ContainerResult>
  )

  return (
   <div>
    {InputSection}
   </div>
 )

}



export default Input
