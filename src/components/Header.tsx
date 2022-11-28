import React,{useState} from 'react'
import { DropDown, HeaderContent, HeaderLeftSection, HeaderLoginText, HeaderLogo, HeaderRightSection, HeaderSignUpButton, HeaderUlSection, MobileMenu } from '../Styles/Header.styled'
import {MenuOutlined} from '@ant-design/icons'



function Header() {
 const [open,setOpen]=useState<boolean>(false) 
 
 const showModal=():void=>{
    setOpen((prevState)=>(!prevState))
 }


 const headerContent=(
  <HeaderContent>
      <HeaderLeftSection>
        <HeaderLogo src="./images/logo.svg"/>
        <HeaderUlSection>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </HeaderUlSection>
        </HeaderLeftSection>

        <HeaderRightSection>
            <HeaderLoginText>
                Login
            </HeaderLoginText>
            <HeaderSignUpButton>
                SignUp
            </HeaderSignUpButton>
        </HeaderRightSection>

        <MobileMenu>
          <MenuOutlined onClick={showModal}/>
     </MobileMenu>

    {open && (
         <DropDown>
          <li>Features</li>
           <li>Pricing</li>
           <li>Resources</li>
           <div className='line'></div>
           <li>Login</li>
           <button>Sign Up</button>
         </DropDown>
         
          )}

  </HeaderContent>
 )

  return (
     headerContent
  )
}

export default Header