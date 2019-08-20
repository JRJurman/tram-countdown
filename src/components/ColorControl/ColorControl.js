import { registerHtml } from 'tram-one'
import './ColorControl.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <input class="ColorControl" type="color" />
  `
}
