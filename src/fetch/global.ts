import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataGlobal {
  ctaSecTitle: string
  phone: string
  email: string
  footerCta: {
    text: string
    link: string
  }
}

export const getGlobal = async () => {
  const query = qs.stringify(
    {
      fields: ['ctaSecTitle', 'phone', 'email'],
      populate: {
        footerCta: {
          fields: ['text', 'link'],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataGlobal = await Axios.get(`/api/global?${query}`)
  return data
}
