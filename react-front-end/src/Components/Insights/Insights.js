import React from 'react'
import ReflectionForm from './ReflectionForm'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

export default function Insights(props) {
  const { insights, activities, addInsight, editInsight, deleteInsight } = props;

  const StyledInsights = styled.div `
    text-align: center;
    margin: 100px 0 30px 0;
    & h1 {
      font-size: 2.6rem;
      text-transform: uppercase;
      letter-spacing: .2rem;
      margin: 30px 0 15px 0;
      color: white;
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
      & textarea {
        resize: none;
      }
      & input, & textarea {
        width: 85%;
        margin: 2% auto;
        padding: 0 5%;
        font-family: inherit;
        font-size: 1.6rem;
        color: white;
        border: none;
        border-bottom: 1px solid #eee;
        background: none;
      }
      & button {
        background: #ec8b76;
        font-family: inherit;
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: .15rem;
        width: auto;
        margin: 15px auto 0 auto;
        border: 1px solid transparent;
        border-radius: 10px;
        padding: 2% 4%;
        color: white;
        text-transform: uppercase;
        &:hover {
          color: #ec8b76;
          background: white;
          border: 1px solid #ec8b76;
          cursor: pointer;
        }
      }
    }
  `

  const StyledWeekContainer = styled.div `
    height: auto;
    width: 400px;
    border-radius: 10px;
    & .card-inner {
      margin: 0 auto;
      padding: 30px 0;
      width: 95%;
      border: 3px solid #00a0ba;
      border-radius: 10px;
      box-shadow: 0 .25rem .75rem rgba(0,0,0,.4);
    }
  `

  const StyledActivityCard = styled.div `
    margin: 20px 0;
    padding: 3%;
    outline: none;
    color: white;
    transition: all .3s ease;
    &:hover {
      transform: scale(1.05);
    }
    & h3 {
      font-size: 1.8rem;
      text-transform: uppercase;
    }
  `

  const StyledReflectionCard = styled.div `
    max-width: 375px;
    padding: 3% 5%;
    font-size: 1.6rem;
    margin-top: 20px;
    border-radius: 10px;
    border: 3px solid #d9eeff;
    box-shadow: 0 1rem 1rem rgba(0,0,0,.6);
    background: #eeeeeedd;
    transition: all .3s ease;
    &:hover {
      transform: scale(1.05);
    }
    & > * {
      margin-bottom: 10px;
    }
    & h3 {
      font-size: 1.2rem;
    }
    & p {
      text-align: center;
    }
    & p.date {
      text-align: right;
      font-size: 1.2rem;
      font-style: italic;
      background: rgba(217, 238, 255, 0.5);
    }
    &:last-child {
      margin-bottom: 80px;
    }
  `

  // for applying the search string to the activities
  const match = (search, item) => {
    const lc_search = search.toLowerCase();
    const name = item.name.toLowerCase();
    const notes = item.notes.toLowerCase();
    const result = name.includes(lc_search) || notes.includes(lc_search);
    return result;
  }


  // if user is not logged in, return to top
  if (!props.status.loggedIn) {
    props.history.push('/');
  }


  return (
    <>
      <StyledInsights>
        {/* "This Week"... shows the last 7 posts in a feed */}
        <h1>This Week:</h1>
        {/* This will map through the activities log data */}
        <StyledWeekContainer>

          <Slider
            speed={750}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            autoplay={true}
            autoplaySpeed={4000} 
            arrows={false}
          >
            {activities.filter(item => match(props.search, item)).map((entry, index) => {
              return(
                <StyledActivityCard key={index}>
                  <div className="card-inner">
                    <h3>{entry.name} | <span>{entry.category}</span></h3>
                    <p>Rating: {entry.rating}</p>
                    <p>{(entry.time / 60).toFixed(1)} hours</p>
                  </div>
                </StyledActivityCard>
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
            <p className="date">week of {item.weekOf}</p>
          </StyledReflectionCard>
        )
      })}
      
    </>
  )
}