import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataTopNav {
  topNav: INav
}

export interface IFooterColumn {
  id: number
  title?: string | null
  content?: string | null
}

export interface IDataFooterNav {
  footer?: INav[] | null
}

export interface IDataFooterColumns {
  footerColumns?: IFooterColumn[] | null
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
        // legacy footer (title + link items), used until footerColumns are filled in Strapi
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

// Rich-text footer columns. Errors are swallowed so the site still renders the legacy footer
// if Strapi doesn't have the footerColumns field yet (deploy order) or the request fails.
export const getFooterColumns = async (): Promise<IFooterColumn[]> => {
  const query = qs.stringify(
    {
      populate: {
        footerColumns: {
          fields: ['title', 'content'],
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  )
  try {
    const data: IDataFooterColumns = await Axios.get(`/api/navigation?${query}`)
    return data.footerColumns?.filter((col) => col.title || col.content) ?? []
  } catch {
    return []
  }
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
