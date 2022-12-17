import React,{useEffect, useState} from 'react'
import { ButtonInput, ContainerResult, FormContainer, InputContent, ResultData, SearchInput,ErrorMessage } from '../Styles/Input.styled'
import axios from 'axios'
import ShortLink from './ShortLink'
import { GetShortenLinkTypes } from '../model'
import getLocalStorage from './LocalStorage'






function Input(){
  const [input,setInput]=useState("")
  const [link,setLink]=useState<GetShortenLinkTypes[]>(getLocalStorage())



 // const [showData,setShowData]=useState(false)

 const [showData,setShowData]=useState(true) 
 const [error,setError]=useState("")
  const [redBorder,setRedBorder]=useState(false)


  useEffect(()=>{
    localStorage.setItem("link",JSON.stringify(link))
},[link])


  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!input){
      setShowData(false)
      setRedBorder(true)
      setError('Please Enter a link')
      console.log('Please add a text')
    }

    else{
      setShowData(true)
      const getData=async()=>{
         const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
         setLink([...link,data])
         setInput('')
         setError('')
         setRedBorder(false)
         console.log(data)
      }

      getData()
    }

  }


  const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }



  const InputSection=(
        <ContainerResult>
          <FormContainer onSubmit={handleSubmit}>
          <InputContent>
          <SearchInput type="text" className={redBorder ?'redBorder':'default'} placeholder='Shorten a link here......' value={input} 
          onChange={handleOnChange}/>


          <ButtonInput>Shorten it!</ButtonInput> 
            <ErrorMessage>{error}</ErrorMessage>
          </InputContent>
          </FormContainer>
      
          {showData &&(
            <ResultData>
              <>
              {link.map((item)=>(
                <ShortLink result={item.result}/>
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
