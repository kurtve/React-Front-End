// import { useState, useEffect } from 'react';


const dummyDateString = (new Date()).toUTCString();
const dummyWeekString = (new Date()).toDateString();

export const initialActivities = [{
    id: '0',
    name: 'Hiking',
    category: 'Fitness',
    notes: '10 mile hike through Deep Canyon',
    rating: '4',
    time: 240,
    created: dummyDateString,
    updated: null
  },
  {
    id: '1',
    name: 'Writing',
    category: 'Creative',
    notes: 'Wrote an outline for chapter 1 of my novel',
    rating: '3',
    time: 25,
    created: dummyDateString,
    updated: null
  },
  {
    id: '2',
    name: 'Coding',
    category: 'Professional Development',
    notes: 'Lambda School build week, day 6...it could have gone better',
    rating: '2',
    time: 180,
    created: dummyDateString,
    updated: null
  },
  {
    id: '3',
    name: 'Cleaning the Apartment',
    category: 'Dirty Work',
    notes: 'Vacuumed and mopped the tile floors and cleaned the windows',
    rating: '2',
    time: 45,
    created: dummyDateString,
    updated: null
  },
  {
    id: '4',
    name: 'Painting',
    category: 'Creative',
    notes: 'Landscape - mountainside covered with \'happy little trees\'',
    rating: '3',
    time: 33,
    created: dummyDateString,
    updated: null
  }
];


export const initialInsights = [{
  id: '0',
  weekOf: dummyWeekString,
  reflection: 'I think I seriously need to start rethinking my goal to be a programmer',
  created: dummyDateString,
  updated: null
}];



// replace icon with a resource link for image file
export const categories = [{
    id: 0,
    name: 'Fitness',
    icon: null
  },
  {
    id: 1,
    name: 'Creative',
    icon: null
  },
  {
    id: 2,
    name: 'Professional Development',
    icon: null
  },
  {
    id: 3,
    name: 'Dirty Work',
    icon: null
  }
];



// initialize state, either using previous state if available, or initObj otherwise
export const initialize = (dataName, initObj, setter) => {
  const prevState = JSON.parse(localStorage.getItem(dataName));

  if (Array.isArray(prevState)) {
    // found something in local storage, use it
    setter(prevState);
  } else {
    // found nothing, or malformed data. set to initObj
    localStorage.setItem(dataName, JSON.stringify(initObj));
    setter(initObj);
  }

};


// get the max id currently in the list
const getMaxId = (itemList) => {
  return itemList.reduce((accum, item) => Math.max(accum, item.id), -1);
};


// add a new item to a list
export const add = (dataName, newItem, itemList, setList) => {
  newItem.created = (new Date()).toUTCString();
  newItem.updated = null;
  newItem.id = getMaxId(itemList) + 1;
  const newList = [...itemList, newItem];
  // update local storage
  localStorage.setItem(dataName, JSON.stringify(newList));
  // update state to match
  setList(newList);
};


// replace an item in a list
export const edit = (dataName, item, itemList, setList) => {
  const index = itemList.findIndex(e => e.id === item.id);
  // if index was not found, do nothing
  if (index < 0) return;
  // replace the old version of item with the updated version
  // first populate the update date field
  item.updated = (new Date()).toUTCString();
  const newList = itemList.slice(0, index).concat([item]).concat(itemList.slice(index + 1));
  // update local storage
  localStorage.setItem(dataName, JSON.stringify(newList));
  // update state to match
  setList(newList);
};


export const remove = (dataName, itemId, itemList, setList) => {
  const index = itemList.findIndex(e => e.id === itemId);
  // if index was not found, do nothing
  if (index < 0) return;
  // remove the item from the list
  const newList = itemList.slice(0, index).concat(itemList.slice(index + 1));
  // update local storage
  localStorage.setItem(dataName, JSON.stringify(newList));
  // update state to match
  setList(newList);
};

