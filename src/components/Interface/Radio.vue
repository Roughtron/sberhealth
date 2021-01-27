<template>
  <label
    class="radio"
  >
    <span class="radio">
      <input
        class="radio__input visually-hidden"
        type="radio"
        :name="name"
        :checked="shouldBeChecked"
        :value="value"
        @change="updateInput"
      >
      <span class="radio__pseudo"></span>
      <span class="radio__text">
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  model: {
    prop: 'modelValue',
    event: 'change'
  }
})

export default class Radio extends Vue {
  @Prop() value!: string
  @Prop({ default: '' }) modelValue!: string
  @Prop({ default: '' }) name!: string

  get shouldBeChecked () {
    return this.modelValue === this.value
  }

  updateInput () {
    this.$emit('change', this.value)
  }
}
</script>

<style lang="stylus">
.radio
  display block
  line-height 18px
  text-align left
  white-space nowrap
  cursor pointer
  -webkit-tap-highlight-color transparent

  &__in
    position relative
    display inline-block
    vertical-align top
    line-height 1

  &__input

    &:checked
      ~ .radio__pseudo
        background-color #3b99fc
        border-color #3b99fc

        &:after
          opacity 1

    &:focus
      ~ .radio__pseudo
        border-color #3b99fc

  &__pseudo
    position relative
    display inline-block
    vertical-align top
    width 18px
    height 18px
    background-color transparent
    border 1px solid #bfbfbf
    border-radius 50%
    box-sizing border-box
    transition background-color ease .3s, border-color ease .3s
    backface-visibility hidden

    &:after
      content ""
      position absolute
      top 50%
      left 50%
      width 4px
      height 4px
      background-color #fff
      border-radius 50%
      transform translate(-50%, -50%)
      opacity 0
      transition opacity linear .1s

  &__text
    display inline-block
    vertical-align middle
    padding-left 11px
    font-size 16px
    line-height 18px
    white-space normal
    color #2e404b
    user-select none
</style>
