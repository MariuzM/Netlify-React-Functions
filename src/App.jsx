import React from 'react'
import axios from 'axios'

export default function App() {
  const handleOnSubmit = async (value, actions) => {
    await axios
      .post(`http://127.0.0.1:9000/_base`, {
        // .get(`https://jsonplaceholder.typicode.com/posts`, {
        // .post(`http://localhost:9000/_base`, {
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
    <button type="button" onClick={handleOnSubmit}>
      Test
    </button>
  )
}
