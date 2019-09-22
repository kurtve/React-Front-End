import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import logo from './Assets/logo.svg';
import ActivitiesFeed from './Components/ActivitiesFeed/ActivitesFeed';
import Insights from './Components/Insights/Insights';
import AddActivityForm from './Components/ActivitiesFeed/AddActivityForm';
import ActivityCard from './Components/ActivitiesFeed/ActivityCard';
import Welcome from './Components/Welcome/Welcome';
import styled from 'styled-components';

function App() {

  const StyledApp = styled.div `
    max-width: 480px;
    height: 100vh;
    border: 1px solid red;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `

  return (
    <StyledApp>
     <Nav logo={logo} />

     <Route exact path="/" component={Welcome} />
     <Route path="/insights" component={Insights} />
     <Route path="/addactivity" component={AddActivityForm} />
     <Route path="/activities" component={ActivitiesFeed} />
     <Route path="/activities/:id" component={ActivityCard} />

    </StyledApp>
  );
}

export default App;
