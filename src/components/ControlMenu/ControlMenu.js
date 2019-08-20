import { registerHtml } from 'tram-one'
import './ControlMenu.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="ControlMenu">
      tram-countdown
    </div>
  `
}
