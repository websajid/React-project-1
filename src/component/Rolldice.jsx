// import React, { useState } from 'react'
import styled from 'styled-components'

export default function Rolldice({currentludu,RollDice}) {
    // const [currentludu,setcurrentludu]=useState(1)
    
    

  return (
    <DiceContainer>
        <div className='diceroll' onClick={RollDice}>
            <img src={`./dice/dice_${currentludu}.png`} alt="Lodo" /><span>{currentludu}</span>
        </div>
    
        <p >Click on Ludo to roll</p>
    </DiceContainer>
  )
}
const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size:24px;
}
`;

