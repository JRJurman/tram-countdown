import CalendarValue from './CalendarValue'

describe('CalendarValue', () => {
  describe('with default props', () => {
    const wrapper = CalendarValue()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
