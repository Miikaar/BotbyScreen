import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export class ButtonTest extends React.Component {
	render() {
		return (
			<RaisedButton label="Default" />
		);
	}
}
