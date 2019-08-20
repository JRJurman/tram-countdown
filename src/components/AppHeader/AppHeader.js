import { registerHtml } from 'tram-one'
import './AppHeader.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="AppHeader">
      <a href="https://github.com/JRJurman/tram-countdown">Tram Countdown</a>
      created by <a href="http://jrjurman.com/">Jesse Jurman</a> in <a href="https://tram-one.io">Tram One</a>
    </div>
  `
}
