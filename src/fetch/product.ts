import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataProduct {
  title: string
  description: string
  benefits: IDescriptionBlock[]
  image: IDataImage
  shortIcon: IDataImage
  content: any
  compare: IShortProduct[]
  metaData?: IMetaData
  label: IDataLabel[]
  Parameters?: IParameters[]
}

export interface IDataAllProducts {
  title: string
  description: string
  slug: string
  shortContent: string
  image: IDataImage
  label: IDataLabel[]
}

export const getProduct = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ['title', 'description'],
      populate: {
        image: {
          fields: ['url'],
        },
        benefits: {
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
        label: {
          fields: ['text', 'hexColor', 'invertText'],
        },
        Parameters: {
          fields: ['text', 'has'],
          populate: '*',
        },
        shortIcon: {
          fields: ['url'],
        },
        compare: {
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
        content: {
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

  const data: IDataProduct[] = await Axios.get(`/api/products?${query}`)
  return data[0]
}

export const getAllProducts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'description', 'slug', 'shortContent'],
      populate: {
        image: {
          fields: ['url'],
        },
        label: {
          fields: ['text', 'hexColor', 'invertText'],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataAllProducts[] = await Axios.get(`/api/products?${query}`)
  return data
}
