<template>
  <dl class="field-composition">
    <dt class="field-composition__title">
      <form-field-label
        :for="name"
        :class="classes"
      >
        {{ label }}
      </form-field-label>
    </dt>

    <dd class="field-composition__content">
      <slot />

      <form-error
        v-if="errors"
        v-bind="ariaMsg"
        :text="errors[0]"
      />
    </dd>
  </dl>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormFieldLabel from './Label.vue'
import FormError from './FormError.vue'

@Component({
  components: {
    FormFieldLabel,
    FormError
  }
})

export default class FieldComposition extends Vue {
  @Prop() name!: string
  @Prop() label!: string
  @Prop({ default: '' }) classes!: string
  @Prop({ default: undefined }) errors!: Array<string>
  @Prop() ariaMsg!: string
}
</script>

<style lang="stylus" scoped>
.field-composition
  margin 0
  padding 0
  border none

  &__title
    display block
    margin-bottom 5px

  &__content
    display block
    margin 0
</style>
