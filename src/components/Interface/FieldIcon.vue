<template>
  <svg-icon
    class="field-icon"
    :name="name"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component

export default class FieldIcon extends Vue {
  @Prop() name!: string
}
</script>

<style lang="stylus" scoped>
.field-icon
  position absolute
  top 50%
  right 10px
  transform translateY(-50%)
  opacity 0
  transition opacity .3s
  pointer-events none

  &_content_ok
    width 15px
    height 15px
    fill #3c763d

  &_content_cross
    width 15px
    height 15px
    fill #ae4442
</style>
