import Countdown from './Countdown'

describe('Countdown', () => {
  describe('with default props', () => {
    const wrapper = Countdown()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
