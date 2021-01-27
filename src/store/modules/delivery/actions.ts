import { ActionContext } from 'vuex'
import _axios from '@/plugins/axios'
import ApiRoutes from '@/api/ApiRoutes'
import { DeliveryPayload } from '@/types/store/Delivery'

export default {
  async send (ctx: ActionContext<{}, {}>, payload: DeliveryPayload) {
    const { data } = await _axios.post(ApiRoutes.Delivery.Send, payload)
    return data
  }
}
