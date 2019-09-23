import React from 'react'
import ReflectionForm from './ReflectionForm'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

export default function Insights({ insights, activities, addInsight, editInsight, deleteInsight}) {

  const StyledInsights = styled.div `
    text-align: center;
    margin-bottom: 30px;
    & h1 {
      font-size: 2.6rem;
      text-transform: uppercase;
      letter-spacing: .2rem;
      margin: 30px 0;
    }
    & form {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: space-around;
      justify-content: center;
      & > * {
        margin-bottom: 10px;
      }
      & input {
        font-family: inherit;
        font-size: 1.6rem;
        border: none;
        border-bottom: 1px solid #00a0ba;
      }
      & button {
        background: #ec8b76;
        font-family: inherit;
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: .15rem;
        width: auto;
        margin: auto;
        border: none;
        border-radius: 10px;
        padding: 2% 4%;
        color: white;
        text-transform: uppercase;
      }
    }
  `

  const StyledWeekContainer = styled.div `
    height: auto;
    width: 400px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,.1);
    & .card-inner {
      margin: 0 auto;
      padding: 30px 0;
      width: 95%;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 10px;
      box-shadow: 0 .5rem .5rem rgba(0,0,0,.4);
    }
  `

  const StyledWeekCard = styled.div `
    margin: 20px 0;
    padding: 3%;
    outline: none;
  `

  const StyledReflectionCard = styled.div `
    width: 80%;
    padding: 5%;
    font-size: 1.6rem;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 1rem 1rem rgba(0,0,0,.6);
    & > * {
      margin-bottom: 10px;
    }
    & h3 {
      font-size: 1.2rem;
    }
    & p {
      text-align: center;
    }
  `

  return (
    <>
      <StyledInsights>
        {/* "This Week"... shows the last 7 posts in a feed */}
        <h1>This Week:</h1>
        {/* This will map through the activities log data */}
        <StyledWeekContainer>

          <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            autoplay={true}
            autoplaySpeed={5000} 
            arrows={false}
          >
            {activities.map((entry, index) => {
              return(
                <StyledWeekCard key={index}>
                  <div className="card-inner">
                    <h3>{entry.name}</h3>
                    <p>{entry.category}</p>
                    <p>Rating: {entry.rating}</p>
                    <p>{(entry.time / 60).toFixed(1)} hours</p>
                  </div>
                </StyledWeekCard>
              )
            })}
          </Slider>

        </StyledWeekContainer>

      <ReflectionForm 
        insights={insights}
        addInsight={addInsight}
        editInsight={editInsight}
        deleteInsight={deleteInsight}
      />
      
      </StyledInsights>

      {insights.map((item, index) => {
        return(
          <StyledReflectionCard key={index}>
            <h3>Reflection Entry:</h3>
            <p>{item.reflection}</p>
            <p>{item.weekOf}</p>
          </StyledReflectionCard>
        )
      })}
      
    </>
  )
}