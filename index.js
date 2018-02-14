import julian from 'julian';
import moment from 'moment';

const marstime = {
	getMSD(earthTime) {
		earthTime = moment(earthTime).toDate();
		return (julian(earthTime) - 2405522.0028779) / 1.0274912517;
	},
	getMTC(earthTime, format = 'HH:mm:ss') {
		earthTime = moment(earthTime).toDate();
		return moment('2000-01-01 00:00:00').add(moment.duration((24 * this.getMSD(earthTime)) % 24, 'h')).format(format);
	},
	getMissionSol(rover = 'curiosity', date = new Date().getTime()) {
		rover = rover.toLowerCase();

		if (rover === 'curiosity') {
			return Math.floor(this.getMSD(date) - this.getMSD('2012-08-05T05:32:00.000Z'));
		} else if (rover === 'opportunity') {
			return Math.floor(this.getMSD(date) - this.getMSD('2004-01-23T01:35:00.000Z'));
		} else {
			return false;
		}
	}
};

export default marstime;
