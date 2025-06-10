import { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './components/card'

function App() {
  const [actress, setActress] = useState([])
  const [actor, setActor] = useState([])
 useEffect(() => {
  axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
setActress(resp.data);
  }
 )}
 , [])
  useEffect(() => {
  axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
setActor(resp.data);
  }
 )}
 , [])

  return (
    <>
 <div className="container">
  <div className="row row-cols g-4 my-5">
    <h1>Migliori attori del momento</h1>
        {actress.map((curActor) => (
          <div className="col-4">
          <Cards actor={curActor} key={curActor.id}/>
          </div>
        ))}
         {actor.map((curActor) => (
          <div className="col-4">
          <Cards actor={curActor} key={curActor.id}/>
          </div>
        ))}
    </div></div>
     
    </>
  )
}

export default App
