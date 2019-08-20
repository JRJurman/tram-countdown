import { registerHtml, useState, useUrlParams } from 'tram-one'
import './EventInput.scss'

const html = registerHtml()

export default (props, children) => {
  const { name = "Weekend" } = useUrlParams()
  const [eventName, setEventName] = useState(name)
  const onChangeEventName = (e) => setEventName(e.target.value)

  return html`
    <input class="EventInput" value=${eventName} onchange=${onChangeEventName} />
  `
}
