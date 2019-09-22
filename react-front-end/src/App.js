import React, { useState } from 'react';
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

/* functions for maintaining state etc */
import * as helpers from './Functions/helperFunctions';


function App() {

  const StyledApp = styled.div `
    /*
    width: 100vw;
    height: 100vh;
    max-width: 480px;
    border: 1px solid red;
    overflow-y: scroll;
    */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `



  const [activities, setActivities] = useState(helpers.initialActivities);
  const [insights, setInsights] = useState(helpers.initialInsights);




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
