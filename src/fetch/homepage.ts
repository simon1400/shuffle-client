import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataHomepage {
  title: string
  products: IShortProduct[]
  dynamicContent: any
}

export interface IMetaDataHomepage {
  title: string
  metaData?: IMetaData
}

export const getHomepage = async () => {
  const query = qs.stringify(
    {
      populate: {
        dynamicContent: {
          on: {
            'content.cta-block': {
              populate: '*',
            },
            'content.short-artciles': {
              populate: {
                articles: {
                  fields: ['title', 'shortContent', 'slug'],
                  populate: {
                    shortImage: {
                      fields: ['url', 'alternativeText', 'width', 'height'],
                    },
                  },
                },
              },
            },
            'content.logo-carousel': {
              populate: {
                logo: {
                  fields: ['url', 'alternativeText', 'width', 'height'],
                },
              },
            },
            'content.description-block': {
              populate: {
                block: {
                  populate: '*',
                },
              },
            },
            'content.content-item': {
              populate: '*',
            },
            'content.compare-table': {
              populate: '*',
            },
          },
        },
        products: {
          fields: ['title', 'description', 'slug', 'shortContent'],
          populate: {
            image: {
              fields: ['url', 'alternativeText', 'width', 'height'],
            },
            shortIcon: {
              fields: ['url', 'alternativeText', 'width', 'height'],
            },
            label: {
              fields: ['text', 'hexColor', 'invertText'],
            },
          },
        },
        metaData: {
          populate: {
            ogImage: {
              fields: ['url', 'alternativeText', 'width', 'height'],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  )
  const data: IDataHomepage = await Axios.get(`/api/homepage?${query}`)
  return data
}

export const getHomepageMeta = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
      populate: {
        metaData: {
          fields: ['title', 'description'],
          populate: {
            ogImage: {
              fields: ['url', 'alternativeText', 'width', 'height'],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  )
  const data: IMetaDataHomepage = await Axios.get(`/api/homepage?${query}`)
  return data
}
