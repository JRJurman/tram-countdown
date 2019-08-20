import { registerHtml } from 'tram-one'
import CalendarValue from '../CalendarValue'
import EventInput from '../EventInput'
import useQueryControls from '../../hooks/useQueryControls'
import { getDateDiff } from '../../helpers'
import './Countdown.scss'

const html = registerHtml({
  CalendarValue, EventInput
})

export default (props, children) => {
  const {date, event, setDate, setEvent} = useQueryControls()
  const onChangeDate = (domEvent) => {
    setDate(domEvent.target.value)
  }

  const onChangeEvent = (domEvent) => {
    setEvent(domEvent.target.value)
  }

  const dateDiff = getDateDiff(date)
  const direction = dateDiff < 0 ? 'Since' : 'Until'
  const unit = Math.abs(dateDiff) == 1 ? 'Day' : 'Days'
  const innerLabel = ` ${unit} ${direction} `

  return html`
    <div class="Countdown">
      <CalendarValue value=${date} onchange=${onChangeDate} />
      ${innerLabel}
      <EventInput value=${event} onchange=${onChangeEvent} />
    </div>
  `
}
