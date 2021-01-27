import Vue from 'vue'
import { extend, localize, ValidationObserver, ValidationProvider } from 'vee-validate'

import { email, required, regex, numeric, max } from 'vee-validate/dist/rules'

extend('required', required)
extend('regex', regex)
extend('email', email)
extend('numeric', numeric)
extend('max', max)

extend('phone', value => {
  const regex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
  if (regex.test(value)) {
    return true
  }

  return 'Неверный номер телефона'
})

localize({
  en: {
    messages: {
      regex: (fieldName: string) => `Поле <strong>${fieldName}</strong> имеет неверный формат.`,
      required: (fieldName: string) => `Поле <strong>${fieldName}</strong> является обязательным для заполнения.`,
      max: (fieldName: string, { length }) => `Максимальная длина поля <strong>${fieldName}</strong> не должна быть больше ${length} символов`,
      email: () => 'Неверный email.',
      decimal: () => 'Неверное значение, ожидалось целое число',
      numeric: (fieldName: string) => `Поле <strong>${fieldName}</strong> имеет неверный формат.`
    }
  }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
