import { useEffect } from "react"
import axios from "axios"
import storage from 'local-storage-fallback'

export default function Auth(code) {

  const accessToken = storage.getItem('accessToken')
  const refreshToken = storage.getItem('refreshToken')
  const expiresIn = storage.getItem('expiresIn')

  useEffect(() => {
    axios
      .post("http://localhost:8000/callback", { 
          code,
    })
      .then(res => {
        storage.setItem('accessToken', res.data.accessToken)
        storage.setItem('refreshToken', res.data.refreshToken)
        storage.setItem('expiresIn', res.data.expiresIn)
        window.history.pushState({}, null, '/watchplay')
      })
      .catch((err) => {
        console.log(err)
      },[code])
  })

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:8000/refresh", {
          refreshToken,
        })
        .then(res => {
          storage.setItem('accessToken', res.data.accessToken)
          storage.setItem('refreshToken', res.data.refreshToken)
          storage.setItem('expiresIn', res.data.expiresIn)
        })
        .catch((err) => {
          console.log(err)
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}