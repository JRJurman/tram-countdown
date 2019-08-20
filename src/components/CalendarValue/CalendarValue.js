import { registerHtml } from 'tram-one'
import { getDateDiff } from '../../helpers'
import './CalendarValue.scss'

const html = registerHtml()

export default (props, children) => {

  const dateDiff = Math.abs(getDateDiff(props.value))
  const displayLength = dateDiff.toString().length
  const datePickerStyle = `
    width: ${3 + displayLength*2}em;
  `

  return html`
    <div class="CalendarValue">
      <input class="DatePicker" type="date" style=${datePickerStyle} value=${props.value} onchange=${props.onchange} />
      <div class="DisplayValue">${dateDiff}</div>
    </div>
  `
}
