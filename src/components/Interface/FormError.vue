<template>
  <component
    :is="tag"
    class="form-error"
    v-html="text"
  >
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormError extends Vue {
  @Prop({ default: 'div' }) tag!: string
  @Prop({ default: '' }) text!: string
}
</script>

<style lang="stylus" scoped>
.form-error
  color #a94442
</style>
