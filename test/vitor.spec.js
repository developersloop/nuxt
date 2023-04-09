import { shallowMount, mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'

import { testStore } from '@/store/index'
import Vitor from '@/components/Vitor.vue'
const localVue = createLocalVue()

localVue.use(PiniaVuePlugin)
describe('Vitor', () => {
  test('is a Vue instance', () => {
    const order = '11'
    const wrapper = shallowMount(Vitor, {
      localVue,
      pinia: createTestingPinia(),
      props: {
        order: {
          default: order
        }
      }
    })

    const testStore1 = testStore()

    const { id, name, lastname } = testStore1.todo[0]
    const byId = wrapper.find('[class="1"]')
    expect(testStore1.todo[0]).toMatchObject({ id, name, lastname,})
    expect(wrapper.props().order).toBeDefined()
    expect(wrapper.props().order).toBe('11')
    expect(byId.element.textContent).toBe('ad')
  })
})
