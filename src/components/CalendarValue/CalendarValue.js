import { registerHtml } from 'tram-one'
import './CalendarValue.scss'

const html = registerHtml()

export default (props, children) => {
  const displayLength = props.displayValue.length
  const datePickerStyle = `
    width: ${3 + displayLength*2}em;
  `

  return html`
    <div class="CalendarValue">
      <input class="DatePicker" type="date" style=${datePickerStyle} value=${props.date} onchange=${props.onChangeDate} />
      <div class="DisplayValue">${props.displayValue}</div>
    </div>
  `
}
