import React from 'react'
import axios from 'axios'

export default function App() {
  const currentHost = window.location.href
  console.log(window.location)
  console.log('Current Host', currentHost)

  const submitLocalHost = async (value, actions) => {
    await axios
      .post(`${currentHost}_base`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitLocalHostWithS = async (value, actions) => {
    await axios
      .post(`/_base`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitNetlifyApp = async (value, actions) => {
    await axios
      .post(`https://determined-curie-bc9b33.netlify.app/_base`)
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
        http LocalHost:8888
      </button>

      <br />

      <button type="button" onClick={submitLocalHostWithS}>
        https LocalHost:8888
      </button>

      <br />

      <button type="button" onClick={submitNetlifyApp}>
        Netlify App
      </button>
    </>
  )
}
