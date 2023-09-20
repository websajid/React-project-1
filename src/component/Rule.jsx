import React from 'react'
import styled from 'styled-components';

export default function Rule() {
  return (
    <Rulecontainer>
        <div>
            <h3>How to play ludu game ? </h3>
            <p>Select on  any  Number</p>
            <p>Click On Ludu Image</p>
            <p>If you wrong guess then 2 point will be deduct.</p>
        </div>
      
    </Rulecontainer>
  )
}

const Rulecontainer = styled.div`
border-radius: 10px;
margin-top: 24px;
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
h3{
    font-size:18px ;
}

`;