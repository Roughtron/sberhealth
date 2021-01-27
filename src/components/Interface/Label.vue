<template>
  <label
    class="form-field-label"
    :for="name"
  >
    <slot/>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormFieldLabel extends Vue {
  @Prop({ default: '' }) name!: string
}
</script>

<style lang="stylus" scoped>
.form-field-label
  display block
  font-weight bold
  font-size 16px

  &.invalid
    color #ae4442

  &.valid
    color #3c763d
</style>
