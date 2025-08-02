import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Hello ,{ World,Greeting } from './components/Hellow'

function App() {
 

  return (
    <>
     <Hello/>
     <World/>
     <Greeting/>
    </>
  )
}

export default App
