import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL ="http://localhost:8000"

export default function Login() {
  return (
    <Container
      style={{ minHeight: "100vh" }}
    >
      <a href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}