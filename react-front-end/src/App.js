import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import logo from './Assets/logo.svg';
import Nav from './Components/Nav/Nav';
import Welcome from './Components/Welcome/Welcome';
import ActivitiesFeed from './Components/Activities/ActivitesFeed';
import ActivityCard from './Components/Activities/ActivityCard';
import Insights from './Components/Insights/Insights';
import AddActivityForm from './Components/Activities/AddActivityForm';
import EditActivityForm from './Components/Activities/EditActivityForm';

function App() {

  const StyledApp = styled.div `
    width: 100vw;
    /*max-width: 480px;*/
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
     <Route path="/activities" component={ActivitiesFeed} />
     <Route path="/activities/:id" component={ActivityCard} />
     <Route path="/insights" component={Insights} />
     <Route path="/editactivity/:id" component={EditActivityForm} />
     <Route path="/addactivity" component={AddActivityForm} />

    </StyledApp>
  );
}

export default App;
