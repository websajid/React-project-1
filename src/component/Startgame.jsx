import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttonstylecss';

export default function Startgame({toggle}) {
  return (
    <Container>
<div><img src="./dice/sajid.jpg" alt="" /></div>
<div >
<h1 className='content'>DICE GAME</h1>
<Button onClick={toggle}>Play Now</Button>
</div>
    </Container>
    
  )
}

const Container = styled.div`
max-width: 1180px;
height: 100vh;
margin: 0 auto;
display: flex;
align-items: center;
gap: 100px;
img{
  max-width: 400px;
  max-height: 300px;
}
`;

