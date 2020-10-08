import Vue from 'vue'

const TestComponent2 = Vue.component('TestComponent2', {
  template: `
    <div>
      <h1 v-translate>Test String 2</h1>
      <h2>{{testString}}</h2>
    </div>
  `,
  data: () => ({
    testString: this.$gettext('Test String 4')
  })
})

export default TestComponent2
