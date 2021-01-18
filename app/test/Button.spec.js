import Vue from 'vue'
import Vuetify from 'vuetify'
import Button from '@/components/Button.vue'

Vue.use(Vuetify)

describe('Button', () => {
  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(Button)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 要素の存在を確認することも簡単です
  it('has a button', () => {
    expect(wrapper.contains('.count')).toBe(true)
  })

  // ボタンを押してカウントアップするテスト
  // it('button click should increment the count', () => {
  //   expect(wrapper.vm.count).toBe(0)
  //   const button = wrapper.find('button')
  //   button.trigger('click')
  //   expect(wrapper.vm.count).toBe(1)
  // })
})