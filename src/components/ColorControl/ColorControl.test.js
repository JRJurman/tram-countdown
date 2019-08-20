import ColorControl from './ColorControl'

describe('ColorControl', () => {
  describe('with default props', () => {
    const wrapper = ColorControl()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
