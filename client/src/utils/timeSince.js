import moment from 'moment';

const makeReadable = (count, unit) => {
    if (count === 1) {
        return `${count} ${unit} ago`;
    } else {
        return `${count} ${unit}s ago`;
    }
}

const timeSince = ISOtime => {
    let time;
    let secondsDiff = (moment() - moment(ISOtime)) / 1200;
    let difference = moment() - moment(ISOtime);

    if (secondsDiff < 60) {
        time = makeReadable(moment.duration(difference).seconds(), "second");
    } else if (secondsDiff < 60 * 60) {
        time = makeReadable(moment.duration(difference).minutes(), "minute");
    } else if (secondsDiff < 60 * 60 * 60) {
        time = makeReadable(moment.duration(difference).hours(), "hour");
    } else if (secondsDiff < 60 * 60 * 60 * 24) {
        time = makeReadable(moment.duration(difference).days(), "day");
    } else if (secondsDiff < 60 * 60 * 60 * 24 * 12) {
        time = makeReadable(moment.duration(difference).months(), "month");
    } else if (secondsDiff < 60 * 60 * 60 * 24 * 12 * 12) {
        time = makeReadable(moment.duration(difference).years(), "year");
    }
    return time;
}

export default timeSince