import { useUrlParams } from 'tram-one'
import moment from 'moment'

export default () => {
  // set the default for the hook to the weekend
  const weekend = moment().endOf('week').format('L')
  const { date = weekend, event = "Weekend" } = useUrlParams()

  const setEvent = (newEvent) => {
    window.location.search = `?event=${newEvent}&date=${date}`
  }

  const setDate = (newDate) => {
    window.location.search = `?event=${event}&date=${newDate}`
  }

  return { date, event, setEvent, setDate }
}
