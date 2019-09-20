import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import ActivitiesFeed from './Components/ActivitiesFeed/ActivitesFeed';
import Insights from './Components/Insights/Insights';
import AddActivityForm from './Components/ActivitiesFeed/AddActivityForm';
import ActivityCard from './Components/ActivitiesFeed/ActivityCard';


function App() {
  return (
    <>
     Design Your Life App
     <Nav />

     <Route exact path="/" component={ActivitiesFeed} />
     <Route path="/Insights" component={Insights} />
     <Route path="/AddActivityForm" component={AddActivityForm} />
     <Route path="/AddActivityForm:id" component={ActivityCard} />

    </>
  );
}

export default App;
