import axios from 'axios';


export const baseURL = 'https://design-your-life-backend.herokuapp.com/';


export const getStatus = () => {
  // see if we are currently logged in to the backend
  // check local storage for 1) a status object and 2) a token
  const blankStatus = {
    username: '',
    userID: null,
    loggedIn: false,
    counter: 0
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
    loggedIn: false,
    counter: 0
  };

  localStorage.removeItem('DYL_status');
  localStorage.removeItem('DYL_token');

  setStatus(blankStatus);
};



// make axios call to register a new user
export const register = (setLogin, username, password, email) => {

  axios
    .post(`${baseURL}api/auth/register`, {
      username: username,
      password: password,
      email: email
    })
    .then(res => {
      // success!
      setLogin({
        username: username,
        password: password,
        email: '',
        emessage: '',
        imessage: 'Registration successful! You may log in now'
      });

    })
    .catch(err => {
      // failure!
      setLogin({
        username: username,
        password: password,
        email: email,
        imessage: '',
        emessage: 'Registration failed. Please try again'
      });

    });

};


// make axios call to log in
export const login = (setStatus, setLogin, username, password) => {

  axios
    .post(`${baseURL}api/auth/login`, {
      username: username,
      password: password
    })
    .then(res => {
      // success!
      const newStatus = {
        username: username,
        userID:  res.data.userID,
        loggedIn: true,
        counter: 0
      };

      localStorage.setItem('DYL_token', res.data.token);
      localStorage.setItem('DYL_status', JSON.stringify(newStatus));

      setStatus(newStatus);
    })
    .catch(err => {
      // failure!
      // let the user know that the login failed
      setLogin({
        username: username,
        password: password,
        email: '',
        imessage: '',
        emessage: 'Login failed. Please try again'
      });

    });

};



// because the back end is using a different layout than the front end,
// we need some helper functions to map the formats back and forth

// activities back -> front
// back end currently does not have an activity ID, so one must be supplied here
export const activityB2F = (act, id) => {
  const mappedAct = {
    id: null,
    name: '',
    category: '',
    notes: '',
    rating: '',
    time: 0,
    date: ''
  };

  mappedAct.id = id;
  mappedAct.name = act.activityName;
  mappedAct.category = act.category;
  mappedAct.notes = act.description;
  mappedAct.time = Number.parseInt(act.duration);
  mappedAct.rating = act.enjoymentLevel;
  mappedAct.date = act.createdDate.substring(0, 10);

  return mappedAct;
};


// activities front -> back
// back-end needs userID and username as elements, so supply them here
export const activityF2B = (act, userID) => {

  const mappedAct = {
    activityName: "",
    category: "",
    description: "",
    createdDate: "",
    duration: "",
    energyLevel: 1,
    engagementLevel: 1,
    enjoymentLevel: 1,
    userId: 1
  };

  mappedAct.activityName = act.name;
  mappedAct.category = act.category;
  mappedAct.description = act.notes;
  mappedAct.duration = act.time.toString() + ' minutes';
  mappedAct.createdDate = act.date;
  mappedAct.userId = userID;
  mappedAct.enjoymentLevel = act.rating;

  return mappedAct;
};


// insights front -> back
// backend requires a userID, so supply it here
export const insightF2B = (ins, userID) => {

  const mappedIns = {
    reflectionId: null,
    userId: null,
    week: '',
    reflectionText: '',
    insights: 'x',
    trends: 'x',
    timestamp: ''
  };

  mappedIns.userId = userID;
  mappedIns.reflectionText = ins.reflection;
  mappedIns.reflectionId = ins.id;
  mappedIns.week = ins.weekOf;
  mappedIns.timestamp = ins.created ? ins.created : (new Date()).toUTCString();

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


// reverse the order of elements in an array, in place
export const reverse = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len/2; i++) {
    let temp = arr[i];
    arr[i] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }

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
      // map activity array to front-end format and
      // reverse the order before updating state
      const newArray = res.data.map((item, idx) => activityB2F(item, idx));
      reverse(newArray);
      setActivities(newArray);
    })
    .catch(err => {
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
      // map insight array to front-end format and
      // reverse the order before updating state
      const newArray = res.data.map((item) => insightB2F(item));
      reverse(newArray);
      setInsights(newArray);
    })
    .catch(err => {
      if (err.response.status === 401) {
        // invalid token--perhaps expired? force a re-login
        localStorage.removeItem("DYL_token");
      }
    });

};


// make axios call to add a new activity to the backend
export const addActivity = (status, setStatus, activity) => {

  // change activity to the format the backend expects
  const b_activity = activityF2B(activity, status.userID);

  axios
    .post(`${baseURL}api/activity`, b_activity, {
      headers: { Authorization: localStorage.getItem("DYL_token") }
    })
    .then(res => {
      // success!
      // update the status to force a reload of the data
      setStatus({ ...status, counter: status.counter + 1 });
    })
    .catch(err => {
      // failure!

      // TODO: send a message to the user?

      if (err.response.status === 401) {
        // invalid token--perhaps expired? force a re-login
        localStorage.removeItem("DYL_token");
      }
    });

};


// make axios call to add a new insight to the backend
export const addInsight = (status, setStatus, insight) => {

  // change insight to the format the backend expects
  const b_insight = insightF2B(insight, status.userID);

  axios
    .post(`${baseURL}api/reflection`, b_insight, {
      headers: { Authorization: localStorage.getItem("DYL_token") }
    })
    .then(res => {
      // success!
      // update the status to force a reload of the data
      setStatus({ ...status, counter: status.counter + 1 });
    })
    .catch(err => {
      // failure!
      
      // TODO: send a message to the user?

      if (err.response.status === 401) {
        // invalid token--perhaps expired? force a re-login
        localStorage.removeItem("DYL_token");
      }
    });

};



// Note: these items just operate on the objects in memory

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

