import React from 'react'
import BigCard from './BigCard'

const Bigmapp = ({data,bigvalue}) => {
  return (
    <div>
        {bigvalue.map((v)=>{
            return <BigCard name={v.name.first} last ={v.name.last} location = {v.location.country } 
            city={v.location.city}  state={v.location.state} phone={v.phone}
            img={v.picture.large} age={v.dob.age} 

             />

        })}
      
    </div>
  )
}

export default Bigmapp
