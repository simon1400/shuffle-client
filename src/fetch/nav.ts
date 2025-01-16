import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataNav {
  topNav: INavItem
  footer: INavItem[]
  socNav: {
    link: string
    icon: 'facebook' | 'twitter' | 'instagram' | 'linkedin'
  }
}

export const getGlobal = async () => {
  const query = qs.stringify(
    {
      populate: ['topNav', 'footer', 'socNav'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataNav = await Axios.get(`/api/navigation?${query}`)
  return data
}
