<template>
  <div class="home">
    <delivery-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DeliveryForm from '@/components/Delivery/DeliveryForm.vue'

@Component({
  components: {
    DeliveryForm
  }
})
export default class Home extends Vue {
}
</script>
