import React from 'react'
import Corediv from './Corediv'

const Mappingdiv = ({data,setValue,bigvalue}) => {
 


  return (
    <div >
  {data.map((v)=>{
    return   <Corediv  bigvalue={bigvalue} setValue={setValue} data={v} name={v.name.first} location ={v.location.country} img={v.picture.large} age={v.dob.age} />
  })}
    
    </div>
  )
}

export default Mappingdiv
