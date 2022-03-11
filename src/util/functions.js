import moment from 'moment';

/**
 * Calculate diff between 2 dates
 */
export const calculateTimeDiff = (start, end) => {
  let str = '';
  const m1 = moment(start);
  const m2 = moment(end);
  const duration = moment.duration(m2.diff(m1));
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (hours > 0) {
    str += `${hours} ${hours > 1 ? 'hours' : 'hour'} `;
  }
  if (minutes > 0) {
    str += `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} `;
  }
  if (seconds > 0) {
    str += `${seconds} ${seconds > 1 ? 'seconds' : 'second'}`;
  }

  return str;
};
