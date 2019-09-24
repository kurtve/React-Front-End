import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Components/Nav/Nav';
import Welcome from './Components/Welcome/Welcome';
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


  const [activities, setActivities] = useState([]);
  const [insights, setInsights] = useState([]);


  // one-time call to initialize state with persistent local storage
  // pass an empty array as the 2nd arg to not use dummy data
  useEffect(() => {
    helpers.initialize('DYL_activities', helpers.initialActivities, setActivities);
    helpers.initialize('DYL_insights', helpers.initialInsights, setInsights);
  }, []);



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

      <Nav />

      <Route exact path="/" component={Welcome} />

      <Route path='/activities' render={(props) => (
        <ActivitiesFeed {...props} activities={activities} />
      )} />

      <Route path='/deleteactivity/:id' render={(props) => (
        <ConfirmDelete {...props} activities={activities} deleteActivity={deleteActivity} />
      )} />

      <Route path='/insights' render={(props) => (
        <Insights {...props} insights={insights} activities={activities}
         addInsight={addInsight} editInsight={editInsight} deleteInsight={deleteInsight} />
      )} />

      <Route path='/addactivity' render={(props) => (
        <AddActivityForm {...props} addActivity={addActivity} />
      )} />

      <Route path='/editactivity/:id' render={(props) => (
        <EditActivityForm {...props} editActivity={editActivity} />
      )} />

    </StyledApp>
  );
}

export default App;