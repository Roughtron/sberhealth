<template>
  <div class="form-field-box">
    <select
      v-bind="$attrs"
      class="form-field form-field_type_select"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
      <option disabled selected value="">Не выбрано</option>
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SelectOption } from '@/types/Interface/SelectOption'

@Component({
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  }
})

export default class SelectField extends Vue {
  @Prop({ default: '' }) value!: string
  @Prop({ default: () => [] }) items!: Array<SelectOption>
}
</script>

<style lang="stylus" scoped>
.form-field-box
  position relative

  &.invalid
    .form-field_type_select
      border-color #ae4442

  &.valid
    .form-field_type_select
      border-color #3c763d

.form-field_type_select
  width 100%
  height 34px
  padding 0 10px
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
</style>
