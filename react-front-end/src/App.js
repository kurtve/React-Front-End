import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import background from './Assets/background3.jpg'
import styled from 'styled-components';

import Nav from './Components/Nav/Nav';
import Landing from './Components/Welcome/Landing';
import ActivitiesFeed from './Components/Activities/ActivitesFeed';
import ConfirmDelete from './Components/Activities/ConfirmDelete';
import Insights from './Components/Insights/Insights';
import AddActivityForm from './Components/Activities/AddActivityForm';
import EditActivityForm from './Components/Activities/EditActivityForm';


/* functions for maintaining state, etc */
import * as helpers from './Functions/helperFunctions';

function App() {

  const StyledApp = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100vh;
      width: 100vw;
      background: url(${background}), rgba(0,0,0,.4);
      background-attachment: fixed, fixed;
      background-size: cover, cover;
      background-position: center, center;
      background-blend-mode: multiply;
    }
  `


  // check local storage to see if we are already logged in
  // status object looks like {username, userID, loggedIn}
  const currentStatus = helpers.getStatus();


  const [status, setStatus] = useState(currentStatus);

  // state for our activities and insights lists, and a search string
  const [activities, setActivities] = useState([]);
  const [insights, setInsights] = useState([]);
  const [search, setSearch] = useState('');


  // whenever status changes (we log in or log out),
  // reload activities and insights from backend
  useEffect(() => {
    helpers.initActivities(status, setActivities);
    helpers.initInsights(status, setInsights);
  }, [status]);



  // helpers.addActivity and addInsight post new
  // items to the backend
  const addActivity = (newActivity) => {
    helpers.addActivity(status, setStatus, newActivity);
  };

  const addInsight = (newInsight) => {
    helpers.addInsight(status, setStatus, newInsight);
  };



  // helpers.delete removes an item from an array in memory
  // if the id is not found in the array, no change takes place
  const deleteActivity = (activityId) => {
    helpers.remove(activityId, activities, setActivities);
  };

  const deleteInsight = (insightId) => {
    helpers.remove(insightId, insights, setInsights);
  };


  // helpers.edit an item to an array in memory
  // if the id is not found in the array, no change takes place
  const editActivity = (activity) => {
    helpers.edit(activity, activities, setActivities);
  };

  const editInsight = (insight) => {
    helpers.edit(insight, insights, setInsights);
  };


  return (
    <StyledApp>

      <Route path="/" render={(props) => (
        <Nav {...props} search={search} setSearch={setSearch} status={status} setStatus={setStatus} />
      )} />

      <Route exact path='/' render={(props) => (
        <Landing {...props} status={status} setStatus={setStatus} />
      )} />

      <Route path='/activities' render={(props) => (
        <ActivitiesFeed {...props} search={search} activities={activities} status={status} />
      )} />

      <Route path='/deleteactivity/:id' render={(props) => (
        <ConfirmDelete {...props} activities={activities} status={status}
         deleteActivity={deleteActivity} />
      )} />

      <Route path='/insights' render={(props) => (
        <Insights {...props} insights={insights} activities={activities} search={search} status={status}
         addInsight={addInsight} editInsight={editInsight} deleteInsight={deleteInsight} />
      )} />

      <Route path='/addactivity' render={(props) => (
        <AddActivityForm {...props} addActivity={addActivity} activities={activities} status={status} />
      )} />

      <Route path='/editactivity/:id' render={(props) => (
        <EditActivityForm {...props} editActivity={editActivity} activities={activities} status={status} />
      )} />


    </StyledApp>
  );
}

export default App;