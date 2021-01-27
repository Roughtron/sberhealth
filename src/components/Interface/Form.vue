<template>
  <form
    class="form"
    @submit.prevent="$emit('submit')"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheForm extends Vue {
}
</script>

<style lang="stylus">
.form-fields-group
  margin 0
  padding 0
  border none

.form-fields-list
  margin 0
  padding 0
  list-style none

  &_layout_a-b
    display flex
    flex-wrap wrap
    justify-content space-between

    .form-fields-list__item
      flex-basis 48%
      margin-bottom 0

  &_layout_a-b-c
    display flex
    flex-wrap wrap
    justify-content space-between

    .form-fields-list__item
      flex-basis 30%
      margin-bottom 0

  &__item
    margin-bottom 18px

    &:last-child
      margin-bottom 0
</style>
