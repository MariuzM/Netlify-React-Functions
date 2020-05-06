import React from 'react'
import axios from 'axios'

export default function App() {
  const submitLocalHost = async (value, actions) => {
    await axios
      .post(`http://localhost:8888/_base`, {
        // headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitNetlifyApp = async (value, actions) => {
    await axios
      .post(`https://determined-curie-bc9b33.netlify.app/_base`, {
        // headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <button type="button" onClick={submitLocalHost}>
        LocalHost:9000
      </button>

      <br />

      <button type="button" onClick={submitNetlifyApp}>
        Netlify App
      </button>
    </>
  )
}
