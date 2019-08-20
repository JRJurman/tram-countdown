import moment from 'moment'

export default (targetDate) => {
  return moment(targetDate).diff(moment().startOf('day'), 'days')
}
