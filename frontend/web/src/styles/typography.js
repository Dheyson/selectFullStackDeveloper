import * as Colors from './colors';

const fonts = {
	supperUpperLarge: 48,
	upperLarge: 46,
	extraLarge: 32,
	large: 24,
	header: 18,
	input: 16,
	regular: 14,
	medium: 12,
	small: 11,
	tiny: 10,
};

const headerText = {
	fontFamily: 'Roboto',
	colors: Colors.default.black,
	fontSize: fonts.header,
};

const descriptionText = {
	fontFamily: 'Roboto_Slab',
	colors: Colors.default.black,
	fontSize: fonts.medium,
};

export {fonts, headerText, descriptionText};
