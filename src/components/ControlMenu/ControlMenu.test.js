import ControlMenu from './ControlMenu'

describe('ControlMenu', () => {
  describe('with default props', () => {
    const wrapper = ControlMenu()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
