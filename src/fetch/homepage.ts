import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataHomepage {
  title: string
  products: IShortProduct[]
  dynamicContent: any
  metaData?: IMetaData
}

export const getHomepage = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
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
        metaData: {
          fields: ['title', 'description'],
          populate: {
            ogImage: {
              fields: ['url'],
            },
          },
        },
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
                      fields: ['url'],
                    },
                  },
                },
              },
            },
            'content.logo-carousel': {
              populate: {
                logo: {
                  fields: ['url'],
                },
              },
            },
            'content.description-block': {
              populate: {
                block: {
                  fields: ['contentText'],
                  populate: {
                    icon: {
                      fields: ['url'],
                    },
                    cta: {
                      fields: ['text', 'link'],
                    },
                  },
                },
              },
            },
            'content.content-item': {
              fields: ['title', 'contentText'],
              populate: {
                galery: {
                  fields: ['url'],
                },
              },
            },
            'content.compare-table': {
              fields: ['title'],
              populate: {
                products: {
                  fields: ['title', 'description', 'slug'],
                  populate: {
                    label: {
                      fields: ['text', 'hexColor', 'invertText'],
                    },
                    shortIcon: {
                      fields: ['url'],
                    },
                    Parameters: {
                      fields: ['text', 'has'],
                      populate: '*',
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

  const data: IDataHomepage = await Axios.get(`/api/homepage?${query}`)
  return data
}
