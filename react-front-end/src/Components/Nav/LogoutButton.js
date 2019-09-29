import React from 'react'
import * as helpers from '../../Functions/helperFunctions';

export default function LogoutButton(props) {

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
          <div>
            <i className="fas fa-user-check"></i>
            <p className="username">{props.status.username}</p>
          </div>
          <button className='logout' onClick={logoutHandler}>Log Out</button>
        </div>
      }
    </>
  )
}
