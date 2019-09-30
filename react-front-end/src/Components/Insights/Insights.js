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
      background: #eeeeeedd;
      margin: 20px 0;
      padding: 5%;
      border: 3px solid #00a0ba;
      border-radius: 10px;
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
        color: black;
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
        padding: 5px 10px;
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
    & .name {
      font-size: 2.2rem;
    }
    & .category {
      font-size: 2.0rem;
      text-transform: uppercase;
      margin: 5px;
    }
    & .rating {
      font-size: 1.6rem;
      margin: 5px;
    }
    & .time {
      font-size: 1.6rem;
      margin: 5px;
    }
    & .notes {
      font-size: 1.6rem;
      margin: 5px;
    }
    & .date {
      font-size: 1.6rem;
      margin: 5px;
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


  const timeInHours = (time) => {
    return Math.round(time / 6) / 10;
  };


  // if user is not logged in, return to top level
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

                    <div className='name'>{entry.name}</div>
                    <div className='category'>{entry.category}</div>
                    <div className='rating'>Rating: {entry.rating} stars</div>
                    <div className='time'>Duration: {timeInHours(entry.time)} hours</div>
                    <div className='notes'>{entry.notes}</div>
                    <div className='date'>Date: {entry.date}</div>

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