import logo from './logo.svg';
import './App.css';
import React from "react"
import MyProfilePhoto from './component/profile/ProfilPhoto'
import MyFullName from './component/profile/FullName'
import MyAdress from './component/profile/Address'


const App =()=>{
  return(
    <>
    <MyFullName>
      this is my full name
    </MyFullName>
    <MyAdress>
      This is my adress
    </MyAdress>
    <MyProfilePhoto>
      Here's a picture of me 
    </MyProfilePhoto>

    </>
  )
}

export default App;
