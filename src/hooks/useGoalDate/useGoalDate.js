import { useState, useUrlParams } from 'tram-one'
import moment from 'moment'

export default () => {
  // set the default for the hook to the weekend
  const weekend = moment().endOf('week').format('L')
  const { date = weekend } = useUrlParams()

  const today = moment().startOf('day')

  const [targetDate, setTargetDate] = useState(moment(date))
  const onChangeDate = (event) => {
    setTargetDate(moment(event.target.value))
  }
  const dateDiff = -today.diff(targetDate, 'days')

  return {dateDiff, targetDate, onChangeDate}
}
