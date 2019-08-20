import EventInput from './EventInput'

describe('EventInput', () => {
  describe('with default props', () => {
    const wrapper = EventInput()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
