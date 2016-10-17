import React from 'react';
import ReactDOM from 'react-dom';
import MaterialUI from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let ButtonTest = require('./button_test.jsx').ButtonTest;

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<ButtonTest/>
			</MuiThemeProvider>
		);
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('container')
);