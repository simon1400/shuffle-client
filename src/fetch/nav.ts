import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataNav {
  topNav: INav
  footer: INav[]
  socNav: {
    link: string
    icon: 'facebook' | 'twitter' | 'instagram' | 'linkedin'
  }
}

export const getNav = async () => {
  const query = qs.stringify(
    {
      populate: {
        topNav: {
          fields: ['title'],
          populate: {
            items: {
              fields: ['title', 'link'],
              populate: {
                products: {
                  fields: ['title', 'slug', 'description'],
                  populate: {
                    shortIcon: {
                      fields: ['url'],
                    },
                    label: {
                      fields: ['text', 'hexColor', 'invertText'],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataNav = await Axios.get(`/api/navigation?${query}`)
  return data
}
