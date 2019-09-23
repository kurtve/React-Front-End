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
    notes: 'fucking Lambda School build week crap',
    rating: '2',
    time: 90,
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


export const add = (newItem, itemList, setList) => {

  return;
};



export const edit = (item, itemList, setList) => {

  return;
}


export const remove = (itemId, itemList, setList) => {

  return;
};
