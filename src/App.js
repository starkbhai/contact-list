import React, { useEffect, useState } from 'react'
import Mappingdiv from './componentws/Mappingdiv'
import './App.css'

import Bigmapp from './componentws/BigBox/Bigmapp'

function App() {
 
  //  var arr = [
  //   {name:"Rishi Pnadu" , location:"Washington D.C", img:shoto , age:25},
  //   {name:"Arvind Chatawa" , location:"Bali Indonesia",img:arvind , age:22},
  //   {name:"Lokesh Bairwa " , location:" London U.K",img:lokesh ,age: 23},
  //   {name:"Pasha Bhai " , location:"Cairo Egypt",img:chndel , age:23},
  //   {name:"Crush" , location:"South Africa",img:crush , age:20},
  //   {name:"Bundu Khan" , location:"Turkey",img:bundu , age:20}

  //  ]

   const [arr,setApidata]=useState([]);
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=100").then((element)=>element.json()).then((fin)=>{
          console.log(fin.results);
           setApidata(fin.results);
        })
    },[])
    
  const [bigvalue, setValue]= useState([]);



  return (
    <>
    <h1 className='heading'> Contact List App</h1>
    <div className='App'>
    
     <Mappingdiv data={arr} setValue={setValue} bigvalue={bigvalue}/>
     <Bigmapp data = {arr} bigvalue={bigvalue} />
    </div>
    </>
  )
}

export default App
