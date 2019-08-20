import 'babel-polyfill';
import { registerHtml, start } from 'tram-one'
import Countdown from './components/Countdown'
import ControlMenu from './components/ControlMenu'
import './styles.css'

const html = registerHtml({
  Countdown, ControlMenu
})

const home = () => {
  return html`
    <div class="Home">
      <ControlMenu />
      <Countdown />
      <footer />
    </div>
  `
}

start('#app', home)
