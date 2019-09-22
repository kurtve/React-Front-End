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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `



  const [activities, setActivities] = useState(helpers.initialActivities);
  const [insights, setInsights] = useState(helpers.initialInsights);


  // helpers.add adds an item to an array in state
  // it will add an id and timestamp to the object before adding it to the list
  const addActivity = (newActivity) => {
    helpers.add(newActivity, activities, setActivities);
  };

  const addInsight = (newInsight) => {
    helpers.add(newInsight, insights, setInsights);
  };


  // helpers.delete removes an item to an array in state
  // if the id is not found in the array, no change takes place
  const deleteActivity = (activityId) => {
    helpers.remove(activityId, activities, setActivities);
  };

  const deleteInsight = (insightId) => {
    helpers.remove(insightId, insights, setInsights);
  };


  // helpers.edit replaces an item in an array in state with an updated version
  // if the id of the item is not found in the array, no change takes place
  const editActivity = (activity) => {
    helpers.edit(activity, activities, setActivities);
  };

  const editInsight = (insight) => {
    helpers.edit(insight, insights, setInsights);
  };


  console.log(activities);
  console.log(insights);


  return (
    <StyledApp>

      <Nav logo={logo} />

      <Route exact path="/" component={Welcome} />

      <Route path='/activities' render={(props) => (
        <ActivitiesFeed {...props} activities={activities} />
      )} />

      <Route path='/activities/:id' render={(props) => (
        <ActivityCard {...props} activities={activities} deleteActivity={deleteActivity} />
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
