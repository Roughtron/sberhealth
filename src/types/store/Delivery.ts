
export interface DeliveryPayload {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  deliveryMethod: string;
  country?: string;
  city?: string;
  postcode?: string;
  address?: string;
  date?: string;
  comment?: string;
}

export type DeliveryFormStep2 = Pick<DeliveryPayload, Exclude<keyof DeliveryPayload, 'name' | 'lastname' | 'phone' | 'email'>>

export enum DeliveryMethod {
  SELF = 'self',
  COURIER = 'courier'
}
