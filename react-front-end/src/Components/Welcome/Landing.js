import React from 'react';

import Welcome from './Welcome';
import Login from './Login';


export default function Landing(props) {
	console.log(props)
	return (
		<>
			{ props.status.loggedIn ? <Welcome {...props} /> : <Login {...props} /> }
		</>
	);
}

