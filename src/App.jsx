import { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './components/card'

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
 <div className="container">
  <div className="row row-cols g-4 my-5">
        {actor.map((curActor) => (
          <div className="col-3">
          <Cards actor={curActor} key={curActor.id}/>
          </div>
        ))}
    </div></div>
     
    </>
  )
}

export default App
