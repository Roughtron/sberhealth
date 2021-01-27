<template>
  <fieldset class="form-fields-group">
    <legend class="form-fields-group__title visually-hidden">
      {{ title }}
    </legend>
    <ul
      class="radiolist"
    >
      <li
        class="radiolist__item"
        v-for="item in items"
        :key="`${name}_${item.value}`"
      >
        <radio
          :name="name"
          :value="item.value"
          v-model="checked"
          @change="$emit('change', checked)"
        >
          <template slot>
            <span v-html="item.label"></span>
          </template>
        </radio>
      </li>
    </ul>

    <form-error
      v-if="errors"
      :text="errors[0]"
    />
  </fieldset>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { RadioOption } from '@/types/Interface/Radio'
import Radio from './Radio.vue'
import FormError from './FormError.vue'

@Component({
  components: {
    Radio,
    FormError
  },

  model: {
    prop: 'checked',
    event: 'change'
  }
})

export default class RadioButtonList extends Vue {
  @Prop({ default: '' }) title?: string
  @Prop({ default: 'radio' }) name!: string
  @Prop({ default: () => [] }) value!: RadioOption
  @Prop({ default: () => [] }) items!: Array<RadioOption>
  @Prop({ default: undefined }) errors!: Array<string>

  private checked: RadioOption = this.value

  @Watch('value')
  onChangeItems () {
    this.checked = this.value
  }
}
</script>

<style lang="stylus" scoped>
.radiolist
  margin 0
  padding 0
  list-style none

  &__item
    margin-bottom 7px

    &:last-child
      margin-bottom 0
</style>
