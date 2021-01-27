<template>
  <div class="form-field-box">
    <textarea
      v-bind="$attrs"
      class="form-field form-field_type_textarea"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>

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

export default class TextareaField extends Vue {
  @Prop({ default: '' }) value!: string
  @Prop({ default: undefined }) errors!: Array<string>
}
</script>

<style lang="stylus" scoped>
.form-field-box
  position relative

  &.invalid
    .form-field_type_textarea
      border-color #ae4442

      ~.field-icon_content_cross
        opacity 1

  &.valid
    .form-field_type_textarea
      border-color #3c763d

      ~.field-icon_content_ok
        opacity 1

  .field-icon_content_cross,
  .field-icon_content_ok
    top 10px
    transform none

.form-field_type_textarea
  width 100%
  height 102px
  padding 10px 30px 10px 10px
  font-size 16px
  background none
  border 1px solid #ccc
  border-radius 3px
  transition border-color .3s
  outline none
  box-sizing border-box
  resize none

  &[disabled]
    opacity .5

  &:focus
    border-color #3b99fc

  &::placeholder
    color #999
    opacity 1
</style>
