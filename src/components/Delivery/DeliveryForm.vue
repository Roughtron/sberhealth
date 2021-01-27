<template>
  <div class="delivery-form">
    <nav
      aria-label="Форма оформления заказа"
    >
      <ul
        class="delivery-form__nav"
        role="menubar"
        aria-label="Форма оформления заказа"
      >
        <li
          v-for="(step, index) in steps"
          :key="step.id"
          class="delivery-form__nav-item"
        >
          <a
            class="delivery-form__nav-link"
            role="menuitem"
            :aria-disabled="currentStep !== index"
            :class="{ 'is-active': currentStep === index }"
            :href="`#${step.id}`"
            @click.prevent="gotoStep(index)"
          >
            {{ step.label }}
          </a>
        </li>
      </ul>
    </nav>

    <validation-observer
      v-slot="{ handleSubmit }"
    >
      <the-form
        class="delivery-form"
        @submit="handleSubmit(onSubmit)"
      >
        <fieldset
          v-if="currentStep === 0"
          id="main"
          class="form-fields-group"
        >
          <legend class="form-fields-grop__title visually-hidden">
            Основные данные
          </legend>

          <div class="form-fields-list">
            <div class="form-fields-list__item">
              <div class="form-fields-list form-fields-list_layout_a-b">
                <div class="form-fields-list__item">
                  <validation-provider
                    rules="required|max:255"
                    name="Имя"
                    v-slot="{ errors, classes, ariaMsg, ariaInput }"
                  >
                    <field-composition
                      name="name"
                      label="Имя"
                      :classes="classes"
                      :ariaMsg="ariaMsg"
                      :errors="errors"
                    >
                      <input-field
                        name="name"
                        id="name"
                        placeholder="Иван"
                        v-model="form.step1.name"
                        v-bind="ariaInput"
                        :class="classes"
                      />
                    </field-composition>
                  </validation-provider>
                </div>

                <div class="form-fields-list__item">
                  <validation-provider
                    rules="required|max:255"
                    name="Фамилия"
                    v-slot="{ errors, classes, ariaMsg, ariaInput }"
                  >
                    <field-composition
                      name="lastname"
                      label="Фамилия"
                      :classes="classes"
                      :ariaMsg="ariaMsg"
                      :errors="errors"
                    >
                      <input-field
                        name="lastname"
                        id="lastname"
                        placeholder="Иванов"
                        v-model="form.step1.lastname"
                        v-bind="ariaInput"
                        :class="classes"
                      />
                    </field-composition>
                  </validation-provider>
                </div>
              </div>
            </div>

            <div class="form-fields-list__item">
              <validation-provider
                rules="required|phone"
                name="Телефон"
                v-slot="{ errors, classes, ariaMsg, ariaInput }"
              >
                <field-composition
                  name="phone"
                  label="Телефон"
                  :classes="classes"
                  :ariaMsg="ariaMsg"
                  :errors="errors"
                >
                  <input-field
                    type="phone"
                    name="phone"
                    placeholder="+79046524783"
                    v-model="form.step1.phone"
                    v-bind="ariaInput"
                    :class="classes"
                  />
                </field-composition>
              </validation-provider>
            </div>

            <div class="form-fields-list__item">
              <validation-provider
                rules="required|email"
                name="Email"
                v-slot="{ errors, classes, ariaMsg, ariaInput }"
              >
                <field-composition
                  name="email"
                  label="Email"
                  :classes="classes"
                  :ariaMsg="ariaMsg"
                  :errors="errors"
                >
                  <input-field
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    v-model="form.step1.email"
                    v-bind="ariaInput"
                    :class="classes"
                  />
                </field-composition>
              </validation-provider>
            </div>
          </div>
        </fieldset>

        <fieldset
          v-if="currentStep === 1"
          id="delivery_address"
          class="form-fields-group"
        >
          <legend class="form-fields-group__title visually-hidden">
            Адрес доставки
          </legend>

          <div class="form-fields-list">
            <div class="form-fields-list__item">
              <validation-provider
                rules="required"
                name="Способ доставки"
                v-slot="{ errors, classes, ariaMsg, ariaInput }"
              >
                <radio-button-list
                  title="Способ доставки"
                  v-model="form.step2.deliveryMethod"
                  v-bind="ariaInput"
                  :ariaMsg="ariaMsg"
                  :class="classes"
                  :items="[{ value: deliveryMethodType.COURIER, label: 'Доставка' }, { value: deliveryMethodType.SELF, label: 'Самовывоз' }]"
                  :errors="errors"
                />
              </validation-provider>
            </div>

            <template v-if="form.step2.deliveryMethod === deliveryMethodType.COURIER">
              <div class="form-fields-list__item">
                <div class="form-fields-list form-fields-list_layout_a-b-c">
                  <div class="form-fields-list__item">
                    <validation-provider
                      rules="required"
                      name="Страна"
                      v-slot="{ errors, classes, ariaMsg, ariaInput }"
                    >
                      <field-composition
                        name="country"
                        label="Страна"
                        :classes="classes"
                        :ariaMsg="ariaMsg"
                        :errors="errors"
                      >
                        <select-field
                          name="country"
                          v-model="form.step2.country"
                          v-bind="ariaInput"
                          :items="[{ label: 'Россия', value: 'RU' }, { label: 'Украина', value: 'UA' }, { label: 'Казахстан', value: 'KZ' }]"
                          :class="classes"
                        />
                      </field-composition>
                    </validation-provider>
                  </div>

                  <div class="form-fields-list__item">
                    <validation-provider
                      rules="required|max:255"
                      name="Город"
                      v-slot="{ errors, classes, ariaMsg, ariaInput }"
                    >
                      <field-composition
                        name="city"
                        label="Город"
                        :classes="classes"
                        :ariaMsg="ariaMsg"
                        :errors="errors"
                      >
                        <input-field
                          type="text"
                          name="city"
                          placeholder="Москва"
                          v-model="form.step2.city"
                          v-bind="ariaInput"
                          :class="classes"
                        />
                      </field-composition>
                    </validation-provider>
                  </div>

                  <div class="form-fields-list__item">
                    <validation-provider
                      rules="required|max:6"
                      name="Индекс"
                      v-slot="{ errors, classes, ariaMsg, ariaInput }"
                    >
                      <field-composition
                        name="postcode"
                        label="Индекс"
                        :classes="classes"
                        :ariaMsg="ariaMsg"
                        :errors="errors"
                      >
                        <input-field
                          type="text"
                          name="postcode"
                          placeholder="398000"
                          v-model="form.step2.postcode"
                          v-bind="ariaInput"
                          :class="classes"
                        />
                      </field-composition>
                    </validation-provider>
                  </div>
                </div>
              </div>

              <div class="form-fields-list__item">
                <validation-provider
                  rules="required|max:255"
                  name="Адрес"
                  v-slot="{ errors, classes, ariaMsg, ariaInput }"
                >
                  <field-composition
                    name="address"
                    label="Адрес"
                    :classes="classes"
                    :ariaMsg="ariaMsg"
                    :errors="errors"
                  >
                    <input-field
                      type="text"
                      name="address"
                      placeholder="Москва, ул. Космонавтов, 14/5"
                      v-model="form.step2.address"
                      v-bind="ariaInput"
                      :class="classes"
                    />
                  </field-composition>
                </validation-provider>
              </div>

              <div class="form-fields-list__item">
                <validation-provider
                  :rules="{
                    required: true,
                    regex: /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/
                  }"
                  name="Дата доставки"
                  v-slot="{ errors, classes, ariaMsg, ariaInput }"
                >
                  <field-composition
                    name="date"
                    label="Дата доставки"
                    :classes="classes"
                    :ariaMsg="ariaMsg"
                    :errors="errors"
                  >
                    <input-field
                      type="text"
                      name="date"
                      placeholder="24/05/2021"
                      v-model="form.step2.date"
                      v-bind="ariaInput"
                      :class="classes"
                    />
                  </field-composition>
                </validation-provider>
              </div>
            </template>

            <div class="form-fields-list__item">
              <field-composition
                name="comment"
                label="Комментарий к вашему заказу"
              >
                <textarea-field
                  type="text"
                  name="comment"
                  placeholder="Ваш комментарий здесь..."
                  v-model="form.step2.comment"
                />
              </field-composition>
            </div>
          </div>
        </fieldset>

        <div class="delivery-form__actions">
          <btn
            type="submit"
            class="button_viewtype_primary"
            :class="{ 'is-load': isLoading }"
          >
            {{ currentStep === steps.length - 1 ? 'Оформить заказ' : 'Продолжить' }}
          </btn>
        </div>
      </the-form>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ActionMethod } from 'vuex'
import { namespace } from 'vuex-class'
import { DeliveryFormStep2, DeliveryPayload, DeliveryMethod } from '@/types/store/Delivery'
import TheForm from '@/components/Interface/Form.vue'
import FieldComposition from '@/components/Interface/FieldComposition.vue'
import InputField from '@/components/Interface/Input.vue'
import Btn from '@/components/Interface/Button.vue'
import RadioButtonList from '@/components/Interface/RadioButtonList.vue'
import TextareaField from '@/components/Interface/Textarea.vue'
import SelectField from '@/components/Interface/Select.vue'

const delivery = namespace('delivery')

@Component({
  components: {
    TheForm,
    FieldComposition,
    InputField,
    Btn,
    RadioButtonList,
    TextareaField,
    SelectField
  }
})

export default class DeliveryForm extends Vue {
  @delivery.Action('send') send!: ActionMethod;

  form = {
    step1: {
      name: '',
      lastname: '',
      phone: '',
      email: ''
    },
    step2: {
      deliveryMethod: '',
      country: '',
      city: '',
      postcode: '',
      address: '',
      date: '',
      comment: ''
    }
  }

  isLoading = false

  steps = [{
    id: 'main',
    label: 'Основные данные',
    completed: false
  }, {
    id: 'delivery_address',
    label: 'Адрес доставки',
    completed: false
  }]

  currentStep = 0

  get deliveryMethodType () {
    return DeliveryMethod
  }

  async onSubmit () {
    if (this.currentStep === this.steps.length - 1) {
      try {
        this.isLoading = true
        const { deliveryMethod } = this.form.step2
        const payload: DeliveryPayload = {
          ...this.form.step1,
          deliveryMethod
        }

        if (deliveryMethod === this.deliveryMethodType.COURIER) {
          const { country, city, postcode, address, date } = this.form.step2
          payload.country = country
          payload.city = city
          payload.postcode = postcode
          payload.address = address
          payload.date = date
        }
        payload.comment = this.form.step2.comment

        const { success } = await this.send(payload)
        if (success) {
          this.$modal.show('dialog', {
            title: 'Форма успешно отправлена!',
            text: '',
            buttons: [{
              title: 'Хорошо',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }]
          })

          setTimeout(() => window.location.reload(), 2000)
        } else {
          this.$modal.show('dialog', {
            title: 'Ошибка отправки формы',
            text: 'Просьба повторить запрос позже',
            buttons: [{
              title: 'Хорошо',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }]
          })
        }

        return
      } catch (e) {
        this.$modal.show('dialog', {
          title: 'Ошибка',
          text: 'Произошла неизвестная ошибка, попробуйте повторить запрос позже',
          buttons: [{
            title: 'Хорошо',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })

        return
      } finally {
        this.isLoading = false
      }
    }

    this.steps[this.currentStep].completed = true
    this.currentStep++
  }

  gotoStep (step: number) {
    const [firstStep] = this.steps
    if (this.currentStep === 0 && !firstStep.completed) return

    if (step && !this.steps[step - 1].completed) return

    if (step < this.currentStep) {
      this.clearPreviousStep()
    }

    this.currentStep = step
  }

  clearPreviousStep () {
    Object.keys(this.form.step2).forEach(key => { this.form.step2[key as keyof DeliveryFormStep2] = '' })
  }
}
</script>

<style lang="stylus" scoped>
.delivery-form
  max-width 700px
  margin 0 auto

  &__nav
    display flex
    margin 0 0 15px
    padding 0
    list-style none
    border-bottom 1px solid #ddd

  &__nav-link
    position relative
    display inline-block
    padding 10px 15px
    color #337ab7
    text-decoration none
    border 1px solid transparent
    border-top-right-radius 8px
    border-top-left-radius 8px
    transition border-color .3s

    &.is-active
      color #2c3e50
      border-top-color #ddd
      border-left-color #ddd
      border-right-color #ddd

      &:after
        content ''
        position absolute
        top 100%
        right 0
        left 0
        height 2px
        background-color #fff

  &__actions
    margin-top 18px
</style>
