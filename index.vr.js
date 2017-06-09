import React from 'react';
import {
	AppRegistry,
	asset,
	StyleSheet,
	Pano,
	Text,
	View,
	Model,
	Animated
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

	state = {
		overlayShowing: 0,
		bounceValue: new Animated.Value(0)
	}

	showOverlay = (bool) => {

		this.state.bounceValue.setValue(1.25);
		Animated.spring(this.state.bounceValue, {
			toValue: 0.8,
			friction: 4, // "bounciness", default 7
			tension: 80, // speed, default 40
		}).start();

		console.log(this.state.bounceValue);

		this.setState({
			overlayShowing: bool ? 1 : 0,
		})
	}

	render() {

		return (
			<View>

				<Pano source={asset('king-st.jpg')} />

				{/* Volley overlay */}
				<View
					style={{
						width: 4.2,
						height: 7.5,
						layoutOrigin: [0.5, 1],
						transform: [
							{translate: [5, -0.5, -1.6]},
							// {rotateX : 10},
							{rotateY : -95},
							{rotateZ : 1},
						],
						backgroundColor: 'rgba(0, 0, 255, 0.5)',
						opacity: this.state.overlayShowing
					}}
					onEnter={() => this.showOverlay(true)}
					onExit={() => this.showOverlay(false)}
				>

				</View>

				{/* Generic text */}
				<Animated.Text style={{
						backgroundColor: 'rgba(0, 0, 0, 0.75)',
						color: '#FFFFFF',
						fontSize: 0.5,
						fontWeight: '400',
						layoutOrigin: [0.5, 0.5],
						paddingLeft: 0.2,
						paddingRight: 0.2,
						textAlign: 'center',
						textAlignVertical: 'center',
						// position: 'absolute',
						// top: 0,
						// left: 0,
						transform: [
							{translate: [4, 11, -6]},
							{rotateY : -40},
							{scale: this.state.bounceValue}
						],
						opacity: this.state.overlayShowing
					}}>
						Some text about the thing
				</Animated.Text>

				{/* <Text
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.75)',
						color: '#FFFFFF',
						fontSize: 0.5, // text is 0.5 meters tall
						fontWeight: '400',
						layoutOrigin: [0.5, 0.5],
						paddingLeft: 0.2,
						paddingRight: 0.2,
						textAlign: 'center',
						textAlignVertical: 'center',
						transform: [{translate: [0, 0, -4]}], // text is 4 meters from you
					}}>
					This is awesome
				</Text> */}

				{/* <View style={{
	                    width: 4.2,
	                    height: 7.5,
	                    layoutOrigin: [0.5, 1],
	                    transform: [
	                        {translate: [5, -0.5, -1.6]},
	                        // {rotateX : 10},
	                        {rotateY : -95},
	                        {rotateZ : 1},
	                    ],
	                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                	}}
        		/> */}

			</View>
		);
	}
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
