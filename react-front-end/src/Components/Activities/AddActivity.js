import React from 'react'
import styled from 'styled-components'
import AddActivityForm from './AddActivityForm'

export default function Activities(props) {

  // const StyledActivityForm = styled.div `
  //   text-align: center;
  //   margin: 100px 0;
  //   & h1 {
  //     font-size: 2.6rem;
  //     text-transform: uppercase;
  //     letter-spacing: .2rem;
  //     margin: 30px 0;
  //   }
  //   & form {
  //     margin: 20px 0;
  //     border: 3px solid #00bc98;
  //     border-radius: 10px;
  //     padding: 10%;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: space-around;
  //     justify-content: center;
  //     & > * {
  //       margin-bottom: 30px;
  //     }
  //     & textarea {
  //       resize: none;
  //     }
  //     & input, & textarea {
  //       width: 85%;
  //       margin: 2% auto;
  //       padding: 0 5%;
  //       font-family: inherit;
  //       font-size: 1.6rem;
  //       border: none;
  //       border-bottom: 1px solid #00a0ba;
  //     }
  //     & select {
  //       width: 80%;
  //       margin: 20px auto 30px auto;
  //     }
  //     & button {
  //       background: #ec8b76;
  //       font-family: inherit;
  //       font-size: 1.4rem;
  //       font-weight: 500;
  //       letter-spacing: .15rem;
  //       width: auto;
  //       margin: 15px auto 0 auto;
  //       border: 1px solid transparent;
  //       border-radius: 10px;
  //       padding: 2% 4%;
  //       color: white;
  //       text-transform: uppercase;
  //       &:hover {
  //         color: #ec8b76;
  //         background: white;
  //         border: 1px solid #ec8b76;
  //         cursor: pointer;
  //       }
  //     }
  //   }
  // `

  return (
    <div className="formContainer">
      <AddActivityForm addActivity={props.addActivity} activities={props.activities}/>
    </div>
  )
}
