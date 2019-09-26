import React from 'react';
import styled from 'styled-components';

import Welcome from './Welcome';
import Login from './Login';


export default function Landing(props) {

	return (
		<div>
			{ props.status.loggedIn ? <Welcome {...props} /> : <Login {...props} /> }
		</div>
	);
}

