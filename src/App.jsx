import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [actor, setActor] = useState([])
 useEffect(() => {
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
setActor(resp.data);
  }
 )}
 , [])
  return (
    <>
     <ul>
        {actor.map((curActor) => (
          <li key={curActor.id}>{curActor.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
