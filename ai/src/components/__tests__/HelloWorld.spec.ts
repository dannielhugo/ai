import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('renders links correctly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test Message' } })
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('https://vitejs.dev/')
    expect(links[1].attributes('href')).toBe('https://vuejs.org/')
  })
})
