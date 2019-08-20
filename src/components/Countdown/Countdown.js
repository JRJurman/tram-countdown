import { registerHtml } from 'tram-one'
import CalendarValue from '../CalendarValue'
import EventInput from '../EventInput'
import useGoalDate from '../../hooks/useGoalDate'
import './Countdown.scss'

const html = registerHtml({
  CalendarValue, EventInput
})

export default (props, children) => {
  const {dateDiff, targetDate, onChangeDate} = useGoalDate()

  const direction = dateDiff < 0 ? 'Since' : 'Until'
  const unit = Math.abs(dateDiff) == 1 ? 'Day' : 'Days'
  const innerLabel = ` ${unit} ${direction} `

  return html`
    <div class="Countdown">
      <CalendarValue displayValue=${Math.abs(dateDiff)} date=${targetDate.format("YYYY-MM-DD")} onChangeDate=${onChangeDate} />
      ${innerLabel}
      <EventInput />
    </div>
  `
}
