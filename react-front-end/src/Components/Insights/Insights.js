import React, { useState } from 'react'
import ReflectionForm from './ReflectionForm'
import styled from 'styled-components'

export default function Insights() {

  const StyledWeekContainer = styled.div `
    height: 400px;
    width: 300px;
    padding: 3%;
    border-radius: 20px;
    border: 1px solid green;
    overflow-y: scroll;
  `

  const StyledWeekCard = styled.div `
    margin-bottom: 5%;
    padding: 3%;
    border-radius: 20px;
    border: 1px solid blue;
  `

  const StyledReflectionCard = styled.div `
    border-radius: 20px;
    border: 1px solid green;
  `

  const [reflectionsList, setReflectionsList] = useState([])

  const mockData = [
    {
      id: '0',
      name: 'Hiking',
      category: 'Fitness',
      rating: '4',
      time: 240
    },
    {
      id: '1',
      name: 'Writing',
      category: 'Creative',
      rating: '3',
      time: 25
    },
    {
      id: '2',
      name: 'Coding',
      category: 'Professional Development',
      rating: '5',
      time: 90
    },
    {
      id: '3',
      name: 'Cleaning the Apartment',
      category: 'Dirty Work',
      rating: '2',
      time: 45
    },
    {
      id: '4',
      name: 'Painting',
      category: 'Creative',
      rating: '3',
      time: 33
    }
  ]

  return (
    <>
      <div>
        {/* "This Week"... shows the last 7 posts in a feed */}
        <h1>This Week:</h1>
        {/* This will map through the activities log data */}
        <StyledWeekContainer>
          {mockData.map((entry, index) => {
            return(
              <StyledWeekCard key={index}>
                <h3>{entry.name}</h3>
                <p>{entry.category}</p>
                <p>Rating: {entry.rating}</p>
                <p>{(entry.time / 60).toFixed(1)} hours</p>
              </StyledWeekCard>
            )
          })}
        </StyledWeekContainer>
      </div>
      <ReflectionForm reflectionsList={reflectionsList} setReflectionsList={setReflectionsList} />
      {reflectionsList.map((item, index) => {
        return(
          <StyledReflectionCard key={index}>
            <p>{item.reflection}</p>
            <p>{item.date}</p>
          </StyledReflectionCard>
        )
      })}
    </>
  )
}