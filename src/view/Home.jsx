import { styled } from "styled-components"

import React from 'react'

const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  font-family: "Open Sans", sans-serif;
  
  h1 {
    color: #233742;
    font-size: 13vh;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    font-size: 4vh;
    font-family: "Robo Slab", serif;
  }
` 

function Home() {
  return (
    <UserDescription>
      <h1>Oi, Eu Sou o Alephy.</h1>
      <p>Sou um <strong>desenvolvedor de software</strong>. Gosto de trabalhar no<br/>
        <strong>back-end</strong> na web. Esse é meu site, aqui eu escrevo e compartilho 
        <br/>qualquer <strong>side project</strong> que eu esteja trabalhando.<br/>
      </p>
    </UserDescription>
  )
}

export default Home