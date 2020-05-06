import React from 'react'
import axios from 'axios'

export default function App() {
  const isLocalhostName = window.location.hostname === 'localhost'
  const isLocalhostIPv6 = window.location.hostname === '[::1]'
  const isLocalhostIPv4 = window.location.hostname.match(
    // 127.0.0.1/8
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  )

  console.log(isLocalhostName)
  console.log(isLocalhostIPv6)
  console.log(isLocalhostIPv4)
  // return isLocalhostName || isLocalhostIPv6 || isLocalhostIPv4

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

  const submitLocalHostWithS = async (value, actions) => {
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
