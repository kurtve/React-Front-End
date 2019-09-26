import React from "react";
import styled from 'styled-components'


const StyledLogin = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: flex-start;
  margin-top: 100px;

  h1 {
    font-size: 4rem;
    margin: 20px;
  }

  h3 {
    font-size: 2.4rem;
    margin: 10px;
  }

`;


export default function Login() {

  return (
    <StyledLogin>
      <h1>Design Your Life</h1>

      <div className='login'>

        <h3>Login form will go here</h3>

      </div>
    </StyledLogin>
  )
}
