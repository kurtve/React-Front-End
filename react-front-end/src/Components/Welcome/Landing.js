import React from 'react';

import Welcome from './Welcome';
import Login from './Login';


export default function Landing(props) {

	return (
		<>
			{ props.status.loggedIn ? <Welcome {...props} /> : <Login {...props} /> }
		</>
	);
}

