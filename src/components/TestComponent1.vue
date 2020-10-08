<template>
  <div>
    <h1 v-translate>Test String 1</h1>
    <h2>{{ testString }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TestComponent1',
  data: () => ({
    testString: this.$gettext('Test String 3')
  })
}
</script>

<style scoped>
</style>
