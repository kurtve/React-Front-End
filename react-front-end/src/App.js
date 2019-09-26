import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
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
  `


  const [status, setStatus] = useState({
    username: '',
    userID: null,
    loggedIn: false,
    message: ''
  });

  const [activities, setActivities] = useState([]);
  const [insights, setInsights] = useState([]);
  const [search, setSearch] = useState('');


  // one-time call to initialize state
  // check status to see if we're already logged in
  // load activities and insights from backend
  useEffect(() => {
    helpers.initActivities(status, setActivities);
    helpers.initInsights(status, setInsights);
  }, [status]);



  // helpers.add adds an item to an array in state
  // it will add an id and timestamp to the object before adding it to the list
  const addActivity = (newActivity) => {
    helpers.add('DYL_activities', newActivity, activities, setActivities);
  };

  const addInsight = (newInsight) => {
    helpers.add('DYL_insights', newInsight, insights, setInsights);
  };


  // helpers.delete removes an item to an array in state
  // if the id is not found in the array, no change takes place
  const deleteActivity = (activityId) => {
    helpers.remove('DYL_activities', activityId, activities, setActivities);
  };

  const deleteInsight = (insightId) => {
    helpers.remove('DYL_insights', insightId, insights, setInsights);
  };


  // helpers.edit an item to an array in state
  // if the id is not found in the array, no change takes place
  const editActivity = (activity) => {
    helpers.edit('DYL_activities', activity, activities, setActivities);
  };

  const editInsight = (insight) => {
    helpers.edit('DYL_insights', insight, insights, setInsights);
  };

  return (
    <StyledApp>

      <Nav search={search} setSearch={setSearch} />

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
        <AddActivityForm {...props} addActivity={addActivity} status={status} />
      )} />

      <Route path='/editactivity/:id' render={(props) => (
        <EditActivityForm {...props} editActivity={editActivity} status={status} />
      )} />

    </StyledApp>
  );
}

export default App;