import Gameplay from "./component/Gameplay";
import Startgame from "./component/Startgame";
import { useState } from "react";


function App() {
  const [isGameStarted,setIsGameStarted]= useState(false);
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev)
  };
  return (
    <>
    {isGameStarted ? <Gameplay />: <Startgame   toggle={toggleGamePlay} /> }
    

    </>
  );
}

export default App;

