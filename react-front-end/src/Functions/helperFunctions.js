import axios from 'axios';


//const dummyDateString = (new Date()).toUTCString();
//const dummyWeekString = (new Date()).toDateString();


export const baseURL = 'https://design-your-life-backend.herokuapp.com/';


export const getStatus = () => {
  // see if we are currently logged in to the backend
  // check local storage for 1) a status object and 2) a token
  const blankStatus = {
    username: '',
    userID: null,
    loggedIn: false
  };

  const localStatus = localStorage.getItem('DYL_status');
  const token = localStorage.getItem('DYL_token');

  if (localStatus && token) {
    return JSON.parse(localStatus);
  } else {
    // if both items are not found, blank out local storage
    localStorage.removeItem('DYL_status');
    localStorage.removeItem('DYL_token');

    return blankStatus;
  }
};


export const logout = (setStatus) => {
  // logging out. Reset status and remove any local storage
  const blankStatus = {
    username: '',
    userID: null,
    loggedIn: false
  };

  localStorage.removeItem('DYL_status');
  localStorage.removeItem('DYL_token');

  setStatus(blankStatus);
};



// make axios call to register a new user
export const register = (setStatus, username, password, email) => {

  axios
    .post(`${baseURL}api/auth/register`, {
      username: username,
      password: password,
      email: email
    })
    .then(res => {
      console.log('register axios POST call res.data');
      console.log(res.data);

    })
    .catch(err => {
      console.log('register axios POST call err');
      console.log(err);

    });

};


// make axios call to log in
export const login = (setStatus, username, password) => {

  axios
    .post(`${baseURL}api/auth/login`, {
      username: username,
      password: password
    })
    .then(res => {
      console.log('login axios POST call res.data');
      console.log(res.data);

      const newStatus = {
        username: username,
        userID: 4,  // res.data.userID,
        loggedIn: true
      };

      console.log(newStatus);

      localStorage.setItem('DYL_token', res.data.token);
      localStorage.setItem('DYL_status', JSON.stringify(newStatus));

      setStatus(newStatus);
    })
    .catch(err => {
      console.log('login axios POST call err');
      console.log(err);
    });

};





// because the back end is using a different layout than the front end,
// we need some helper functions to map the formats back and forth

// activities back -> front
export const activityB2F = (act, id) => {
  const mappedAct = {
    id: null,
    name: '',
    category: '',
    notes: '',
    rating: '',
    time: 0,
    created: '',
    updated: null
  };

  mappedAct.id = id;
  mappedAct.name = act.activityName;
  mappedAct.category = act.category;
  mappedAct.notes = act.description;
  mappedAct.time = Number.parseInt(act.duration);
  mappedAct.created = act.createdDate;

  return mappedAct;
};


// activities front -> back
export const activityF2B = (act, userID, username) => {

  const mappedAct = {
    activityName: "",
    category: "",
    createdBy: "",
    createdDate: "",
    description: "",
    duration: "",
    energyLevel: 1,
    engagementLevel: 1,
    enjoymentLevel: 1,
    userId: 1
  };

  mappedAct.activityName = act.name;
  mappedAct.category = act.category;
  mappedAct.description = act.notes;
  mappedAct.duration = act.time.toString();
  mappedAct.createdDate = act.created;
  mappedAct.userID = userID;
  mappedAct.createdBy = username;

  return mappedAct;
};


// insights front -> back
export const insightF2B = (ins, userID) => {
  const mappedIns = {
    userID: null,
    reflectionText: '',
    reflectionId: null,
    week: '',
    insights: 'x',
    trends: 'x',
    timestamp: ''
  };

  mappedIns.userID = userID;
  mappedIns.reflectionText = ins.reflection;
  mappedIns.reflectionId = ins.id;
  mappedIns.week = ins.weekOf;
  mappedIns.timestamp = ins.created;

  return mappedIns;
};


// insights back -> front
export const insightB2F = (ins) => {
  const mappedIns = {
    id: null,
    weekOf: '',
    reflection: '',
    created: '',
    updated: null
  };

  mappedIns.id = ins.reflectionId;
  mappedIns.weekOf = ins.week;
  mappedIns.created = ins.timestamp;
  mappedIns.reflection = ins.reflectionText;

  return mappedIns;
};



// initialilze Activities
export const initActivities = (status, setActivities) => {
  // if we are logged in, then get Activities for the user
  if (status.loggedIn) {
    getActivities(status.userID, setActivities);
  } else {
    setActivities([]);
  }
};


// initialilze Insights
export const initInsights = (status, setInsights) => {
  // if we are logged in, then get Insights for the user
  if (status.loggedIn) {
    getInsights(status.userID, setInsights);
  } else {
    setInsights([]);
  }
};


// make axios call to get all activities for a specific user
export const getActivities = (userID, setActivities) => {

  axios
    .get(`${baseURL}api/activity/user/${userID}`, {
      headers: { Authorization: localStorage.getItem("DYL_token") }
    })
    .then(res => {
      console.log('getActivities axios GET call res.data');
      console.log(res.data);

      // map activity array to front-end format before updating state
      setActivities(res.data.map((item, idx) => activityB2F(item, idx)));
    })
    .catch(err => {
      console.log('getActivities axios GET call err');
      console.log(err);

      if (err.response.status === 401) {
        // invalid token--perhaps expired? force a re-login
        localStorage.removeItem("DYL_token");
      }
    });

};


// make axios call to get all reflections for a specific user
export const getInsights = (userID, setInsights) => {

  axios
    .get(`${baseURL}api/reflection/user/${userID}`, {
      headers: { Authorization: localStorage.getItem("DYL_token") }
    })
    .then(res => {
      console.log('getInsights axios GET call res.data');
      console.log(res.data);

      // map activity array to front-end format before updating state
      setInsights(res.data.map((item) => insightB2F(item)));
    })
    .catch(err => {
      console.log('getInsights axios GET call err');
      console.log(err);

      if (err.response.status === 401) {
        // invalid token--perhaps expired? force a re-login
        //localStorage.removeItem("DYL_token");
      }
    });

};




// get the max id currently in the list
const getMaxId = (itemList) => {
  return itemList.reduce((accum, item) => Math.max(accum, item.id), -1);
};


// add a new item to a list
export const add = (newItem, itemList, setList) => {
  newItem.created = (new Date()).toUTCString();
  newItem.updated = null;
  newItem.id = getMaxId(itemList) + 1;
  const newList = [...itemList, newItem];
  setList(newList);
};


// replace an item in a list
export const edit = (item, itemList, setList) => {
  const index = itemList.findIndex(e => e.id === item.id);
  // if index was not found, do nothing
  if (index < 0) return;
  // replace the old version of item with the updated version
  // first populate the update date field
  item.updated = (new Date()).toUTCString();
  const newList = itemList.slice(0, index).concat([item]).concat(itemList.slice(index + 1));

  setList(newList);
};


export const remove = (itemId, itemList, setList) => {
  const index = itemList.findIndex(e => e.id === itemId);
  // if index was not found, do nothing
  if (index < 0) return;
  // remove the item from the list
  const newList = itemList.slice(0, index).concat(itemList.slice(index + 1));
  setList(newList);
};

