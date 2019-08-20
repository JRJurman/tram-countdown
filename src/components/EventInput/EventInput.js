import { registerHtml } from 'tram-one'
import './EventInput.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <input class="EventInput" value=${props.value} onchange=${props.onchange} />
  `
}
