<template>
  <button
    class="button"
    :type="type"
    @click="$emit('click')"
  >
    <span class="button__text">
      <slot>
        Отправить
      </slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Btn extends Vue {
  @Prop({ default: 'button' }) type!: string
}
</script>

<style lang="stylus" scoped>
.button
  position relative
  display inline-block
  margin 0
  padding 0
  text-decoration none
  background none
  border none
  outline none
  cursor pointer
  box-sizing border-box
  transition opacity .3s
  -webkit-tap-highlight-color transparent

  &[disabled]
    opacity .5
    cursor inherit

  &__text
    position relative
    z-index 1

  &_viewtype_primary
    height 34px
    padding 0 10px
    font-size 16px
    line-height 34px
    text-align center
    color #fff
    white-space nowrap
    background #337ab7
    border-radius 5px
    transition background-color .3s, opacity .3s

    &:hover,
    &:focus
      background-color #3797fc

    &.is-load
      background linear-gradient(-45deg, #2382d4 25%, transparent 25%, transparent 50%, #2382d4 50%, #2382d4 75%, transparent 75%, transparent)
      background-color #337ab7
      background-size 50px 50px
      animation load 2s linear infinite
      pointer-events none

@keyframes load
  0%
    background-position 0 0

  100%
    background-position 50px 50px
</style>
