import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataCompare {
  title: string
  contentText: string
  dynamicContent: any
  metaData?: IMetaData
}

<<<<<<< HEAD
export interface IMetaDataCompare {
  title: string
  metaData?: IMetaData
}

=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
export const getCompare = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'contentText'],
      populate: {
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

  const data: IDataCompare = await Axios.get(`/api/compare?${query}`)
  return data
}
<<<<<<< HEAD

export const getCompareMeta = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
      populate: {
        metaData: {
          fields: ['title', 'description'],
          populate: {
            ogImage: {
              fields: ['url'],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IMetaDataCompare = await Axios.get(`/api/compare?${query}`)
  return data
}
=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
