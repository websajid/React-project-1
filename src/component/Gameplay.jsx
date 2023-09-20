import React from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { useState } from 'react'
import { Button, OutlineButton } from './Buttonstylecss';
import Rule from './Rule'

export default function Gameplay() {
  const [score,setscore]= useState(0)
  const [selectedno, setselectedno]= useState()
  const [currentludu,setcurrentludu]=useState(1)
  const [erormsg,seterormsg]= useState("")
  const [showRule,setshowRule] = useState(false)

  const GeneratRandomNo= (min, max)=>{
    return Math.floor(Math.random()*(max-min)+min)
}
const RollDice = ()=>{
  if(!selectedno){
    seterormsg("Select any Number for Play !")
    return;
   } 
    const randomNUmber = GeneratRandomNo(1,7)
    setcurrentludu((prev) => randomNUmber)
    
    if(selectedno == randomNUmber){
      setscore((p) =>  p + randomNUmber)
      }else{
        setscore((p) =>  p - 1)
      }
      setselectedno(undefined)
}
const resetscore = ()=>{
  setscore(0)
}


    

  return (
    <MaindivSelecton>
    <div className='top_section'>
      <Totalscore score={score} />
      <Numberselector seterormsg={seterormsg} erormsg= {erormsg} selectedno={selectedno} setselectedno={setselectedno}/>
    </div>
    <Rolldice currentludu={currentludu} RollDice={RollDice}/>
    <div className='btns'>
      <OutlineButton onClick={resetscore}>Reset</OutlineButton>
      <Button onClick={()=> setshowRule((prev)=>!prev)}>
        { showRule ? "Hide" : "Show"} Rule</Button>
    </div>
   {showRule && <Rule />}
    </MaindivSelecton>
  )
}
const MaindivSelecton = styled.div`
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 220;
  align-items: center;
  gap: 10px;
}
`;