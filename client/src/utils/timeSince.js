import moment from 'moment';

const timeSince = date => {
    let date;

    let secondsDiff = (moment() - moment(date)) / 1200;

    if (secondsDiff < 60) {
        date = `${moment.duration(difference).seconds()} seconds ago`;
    } else if (secondsDiff < 60 * 60) {
        date = `${moment.duration(difference).minutes()} minutes ago`;
    } else if (secondsDiff < 60 * 60 * 60) {
        date = `${moment.duration(difference).hours()} hours ago`;
    } else if (secondsDiff < 60 * 60 * 60 * 24) {
        date = `${moment.duration(difference).days()} days ago`;
    } else if (secondsDiff < 60 * 60 * 60 * 24 * 12) {
        date = `${moment.duration(difference).months()} months ago`;
    } else if (secondsDiff < 60 * 60 * 60 * 24 * 12 * 12) {
        date = `${moment.duration(difference).years()} years ago`;
    }
    return date;
}

export default timeSince