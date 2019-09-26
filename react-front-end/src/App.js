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

  /*
  const testStatus = {username: 'joe', userID: 4, loggedIn: true};
  const testToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyMiwidXNlcm5hbWUiOiJqb2UiLCJlbWFpbCI6ImpvZUBqb2UuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkUGM3amJXV0R0NXg4Y21KOUY1dy5wLjhvUnJUY2NRMHFDZGExbWYxTVlHMS9wLmEyTTYyUUcifSwic3ViIjoyMiwidXNlcm5hbWUiOiJqb2UiLCJlbWFpbCI6ImpvZUBqb2UuY29tIiwiaWF0IjoxNTY5NTI0ODM5LCJleHAiOjE1Njk2MTEyMzl9.j7Gc3JU0AQ1ryEM_x5KHyeLbFQ6auv5iTMNJxnEtOfI";

  localStorage.setItem('DYL_status', JSON.stringify(testStatus));
  localStorage.setItem('DYL_token', testToken);
  */


  // check local storage to see if we are already logged in
  // status object looks like {username, userID, loggedIn}
  const currentStatus = helpers.getStatus();

  // REMOVE AFTER TESTING
  console.log('in App');
  console.log(currentStatus);

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