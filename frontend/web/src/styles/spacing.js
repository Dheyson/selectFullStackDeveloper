import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const spacing = {
	hairlineMargin: 1,
	tinyMargin: 3,
	smallestMargin: 4,
	smallerMargin: 8,
	smallMargin: 12,
	baseMargin: 16,
	largeMargin: 20,
	largerMargin: 24,
	largestMargin: 28,
	upperLargeMargin: 40,
	extraLargeMargin: 50,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	tabBarHeight: 54,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	statusBarHeight: Platform.OS === 'ios' ? 20 : 44,
	baseRadius: 3,
};

export default spacing;
