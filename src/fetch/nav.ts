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
              populate: {
                products: {
                  fields: ['title', 'slug', 'description'],
                  populate: {
                    shortIcon: {
                      fields: ['url', 'alternativeText', 'width', 'height'],
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
      encodeValuesOnly: true,
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
          populate: {
            items: {
              fields: ['title', 'link'],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
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
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  )
  const data: IDataSocNav = await Axios.get(`/api/navigation?${query}`)
  return data
}
