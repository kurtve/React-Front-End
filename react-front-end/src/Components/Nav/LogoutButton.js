import React from 'react'
import * as helpers from '../../Functions/helperFunctions';

export default function LogoutButton(props) {
  console.log('-_-_-_-_-_-_-', props)

  const logoutHandler = (e) => {
    e.preventDefault();
    // logging out. remove credentials and return to top page
    helpers.logout(props.setStatus);
    props.history.push('/');
  };

  return (
    <>
      {props.status.loggedIn === true && 
        <div>
          <p className="username">{props.status.username}</p>
          <button className='logout' onClick={logoutHandler}>Log Out</button>
        </div>
      }
    </>
  )
}
