// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) =>
	<View style={styles.viewStyle}>
		<Text style={styles.textStyle}>{props.headerText}</Text>
	</View>;

const styles = {
	viewStyle: {
		backgroundColor: '#ffff',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the component available to other parts of the app
export { Header };
