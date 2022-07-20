import React from 'react'

const BigCard = ({name, location , age, img,city,state,phone,last}) => {
  return (
    <div>
      <div className='Big-card'>
      <img src={img}></img>
         <div className='table'>
            <h2> Name: {name} {last}</h2>
             <h4> Address: {city} {state} {location} </h4>

             
             <h4> age : {age}  </h4>
             <h4> Phone Number-: {phone}  </h4>

         </div>
      </div>
    </div>
  )
}

export default BigCard
