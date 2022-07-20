import React, { useState } from 'react' 
import picture from '.././photos/Rami.png'
const Corediv = ({name,location,img,age,data,setValue,bigvalue}) => {
    const [hide,unhide]=useState(1);

  
    const hideFun=()=>{
     unhide(!hide)
     console.log(hide);
    };

    const showBig=()=>{
       setValue([data]);
       console.log(bigvalue);
    }


  return (
    <div>
      <div onClick={showBig} className='box'>
          <div className='img-box'> <img src={img}></img> </div>
          <div className='details'>
            <h3>{name}</h3>
            <h4>{location}</h4>
            <button onClick={hideFun}  className='btn'>Show Age !</button>
            <h5 className={hide?'hide':''} >{age}</h5>
          </div>
      </div>
    </div>
  )
}

export default Corediv
