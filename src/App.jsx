import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
 const apiUrl = "https://lanciweb.github.io/demo/api/actors/](https://lanciweb.github.io/demo/api/actors/)"
 useEffect(() => {
  axios.get(apiUrl).then((resp) => {
    const actorList = resp.data.results;
    <ul>
    {actorList.map((curActor) => {
      <li>{curActor.name}</li>
    })}</ul>
  }
 )}, [])
  return (
    <>
      
    </>
  )
}

export default App
