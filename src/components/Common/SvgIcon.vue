<template>
  <svg
    :class="currentClass"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title
      v-if="title"
    >
      {{ title }}
    </title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  @Prop({ required: true }) readonly name: string | undefined
  @Prop() readonly title: string | undefined
  @Prop({ default: '' }) readonly className: string | undefined

  get iconPath () {
    // eslint-disable-next-line
    let icon = require(`@/assets/icons/${this.name}.svg`)
    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default
    }

    return icon.url
  }

  get currentClass () {
    return 'svg-icon svg-icon--' + this.name + ' ' + this.className
  }
}
</script>

<style lang="stylus">
  .svg-icon
    fill currentColor
    height 24px
    width 24px
</style>
