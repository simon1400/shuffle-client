import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataTopNav {
  topNav: INav
}

export interface IDataFooterNav {
  footer: INav[]
}

export interface INavSocItems {
  link: string
  icon: 'twitter' | 'facebook' | 'instagram' | 'linkedin'
}
export interface IDataSocNav {
  socNav: INavSocItems[]
}

export const getTopNav = async () => {
  const query = qs.stringify(
    {
      populate: {
        topNav: {
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

  const data: IDataTopNav = await Axios.get(`/api/navigation?${query}`)
  return data
}

export const getFooterNav = async () => {
  const query = qs.stringify(
    {
      populate: {
        footer: {
          fields: ['title'],
          populate: {
            items: {
              fields: ['title', 'link'],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataFooterNav = await Axios.get(`/api/navigation?${query}`)
  return data
}
export const getSocNav = async () => {
  const query = qs.stringify(
    {
      populate: {
        socNav: {
          fields: ['link', 'icon'],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataSocNav = await Axios.get(`/api/navigation?${query}`)
  return data
}
