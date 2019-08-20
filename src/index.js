import 'babel-polyfill';
import { registerHtml, start } from 'tram-one'
import Countdown from './components/Countdown'
import AppHeader from './components/AppHeader'
import './styles.css'

const html = registerHtml({
  Countdown, AppHeader
})

const home = () => {
  return html`
    <div class="Home">
      <AppHeader />
      <Countdown />
      <footer style="height: 2em" />
    </div>
  `
}

start('#app', home)
