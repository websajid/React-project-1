import React, { useState } from 'react'
import styled from 'styled-components'

export default function Numberselector({seterormsg,selectedno,setselectedno,erormsg}) {
    const Noarry = [1,2,3,4,5,6]

    const numberSelector = (value)=>{
      setselectedno(value)
      seterormsg("")
    }

  return (
    <NumberselectorsContainer>
      <p className='erortop'>{erormsg}</p>
    <div className='flexy'>
        {Noarry.map((value,index)=> 
        <Box  isSelected={value ===selectedno}
        key={index} 
        onClick={()=>numberSelector(value)}
        >{value}</Box>)}
    </div>
    <p>Select Number</p>
    </NumberselectorsContainer>
  )
}
const NumberselectorsContainer =styled.div`

display: flex;
flex-direction: column;
align-items: end;
padding: 20px;
.flexy{
    display: flex;
    gap: 20px;
}
p{
    font-weight: 900;
    font-size: 25px;
}
.erortop{
  color: red;
}
`;
const Box = styled.div`
height: 60px;
width: 60px;
border: 2px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isSelected ? "black": "white")};
color: ${(props)=>(!props.isSelected ? "black": "white") };
`;
