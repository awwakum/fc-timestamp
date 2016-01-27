'use strict';

var moment = require('moment');

var output = {
	unix: null,
	natural: null
};

function convertDate(date) {
	var d = moment(new Date(date)); // http://stackoverflow.com/questions/23263380/deprecation-warning-moment-construction-falls-back-to-js-date
	if (!isNaN(date) && moment.unix(date).isValid()) {
		output.unix = date;
		output.natural = moment.unix(date).format('MMMM DD, YYYY');
	}
	else if ( moment(d).isValid()) {
		output.unix = moment(d).format('X');
		output.natural = moment(d).format('MMMM DD, YYYY');
	}
	else {
		output.unix = null;
		output.natural = null;
	}
	return output;
}

module.exports = convertDate;