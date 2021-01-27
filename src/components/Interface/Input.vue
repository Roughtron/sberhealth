<template>
  <div class="form-field-box">
    <input
      v-bind="$attrs"
      class="form-field form-field_type_text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >

    <field-icon
      class="field-icon_content_ok"
      name="ok"
    />

    <field-icon
      class="field-icon_content_cross"
      name="cross"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FieldIcon from './FieldIcon.vue'

@Component({
  inheritAttrs: false,
  components: {
    FieldIcon
  }
})

export default class InputField extends Vue {
  @Prop({ default: '' }) value!: string
}
</script>

<style lang="stylus" scoped>
.form-field-box
  position relative

  &.invalid
    .form-field_type_text
      border-color #ae4442

      ~.field-icon_content_cross
        opacity 1

  &.valid
    .form-field_type_text
      border-color #3c763d

      ~.field-icon_content_ok
        opacity 1

.form-field_type_text
  width 100%
  height 34px
  padding 0 30px 0 10px
  font-size 16px
  background none
  border 1px solid #ccc
  border-radius 3px
  transition border-color .3s
  outline none
  box-sizing border-box

  &[disabled]
    opacity .5

  &:focus
    border-color #3b99fc

  &::placeholder
    color #999
    opacity 1
</style>
