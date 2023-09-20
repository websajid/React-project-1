import React from 'react'
import styled from 'styled-components'

export default function Totalscore({score, randomNUmber}) {
  return (
    <StoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      
    </StoreContainer>
  )
}
const StoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1{ 
    font-size: 90px;
    line-height: 10px;
}
p{ font-size:24px;
    font-weight: 500px;
}
`;
