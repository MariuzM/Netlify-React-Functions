import React from 'react'
import axios from 'axios'

export default function App() {
  const handleOnSubmit = async (value, actions) => {
    await axios
      // .post(`http://localhost:8888/_base`, {
      .post(`http://localhost:9000/_base`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <button type="button" onClick={handleOnSubmit}>
      Test
    </button>
  )
}
