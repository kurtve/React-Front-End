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


  const [activities, setActivities] = useState(helpers.initialActivities);
  const [insights, setInsights] = useState(helpers.initialInsights);
  const [filtered, setFiltered] = useState(activities)


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

  // searchFilter accepts input to filter activities
  const searchFilter = (input) => {
    console.log('// input ==>', input)
    // initialize filtered list
    let filteredList = []
    // if the input value exists,
    if(input !== ''){
      // create a new array with the items containing the input value
      filteredList = activities.filter(act => {
        const lc = act.name.toLowerCase()
        console.log('// activities toLowerCase ==>', lc)
        const filter = input.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      setFiltered(activities)
    }
    // set the filtered list to state
    setFiltered(filteredList)
    console.log('// FilteredList ==>', filteredList)
  };


  return (
    <StyledApp>

      {/* pass activities and insights state down through props */}
      <Nav 
        activities={activities} 
        insights={insights} 
        searchFilter={searchFilter} 
        filtered={filtered} 
      />

      <Route exact path="/" component={Welcome} />

      <Route path='/activities' render={(props) => (
        <ActivitiesFeed {...props} activities={activities} filtered={filtered} />
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