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
export interface IMetaDataProduct {
  title: string
  description: string
  image: IDataImage
  metaData?: IMetaData
}

export interface IDataAllProducts {
  title: string
  description: string
  slug: string
  shortContent: string
  image: IDataImage
  shortImage?: IDataImage
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
          fields: ['url', 'alternativeText', 'width', 'height'],
        },
        benefits: {
          fields: ['contentText'],
          populate: {
            icon: {
              fields: ['url', 'alternativeText', 'width', 'height'],
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
          fields: ['url', 'alternativeText', 'width', 'height'],
        },
        compare: {
          fields: ['title', 'description', 'slug'],
          populate: {
            label: {
              fields: ['text', 'hexColor', 'invertText'],
            },
            shortIcon: {
              fields: ['url', 'alternativeText', 'width', 'height'],
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
              fields: ['text'],
              populate: {
                cta: {
                  fields: ['text', 'link'],
                },
              },
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
                  fields: ['contentText'],
                  populate: {
                    icon: {
                      fields: ['url', 'alternativeText', 'width', 'height'],
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
                  fields: ['url', 'alternativeText', 'width', 'height'],
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
                      fields: ['url', 'alternativeText', 'width', 'height'],
                    },
                    Parameters: {
                      fields: ['text', 'has'],
                      populate: '*',
                    },
                  },
                },
              },
            },
            'content.image-text-cta': {
              fields: ['title', 'text'],
              populate: {
                image: {
                  fields: ['url', 'alternativeText', 'width', 'height'],
                },
                cta: {
                  fields: ['text', 'link'],
                },
              },
            },
            'content.video-gallery': {
              fields: ['title'],
              populate: {
                videos: {
                  fields: ['youtubeUrl', 'title'],
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
      sort: ['sortOrder:asc'],
      populate: {
        shortImage: {
          fields: ['url', 'alternativeText', 'width', 'height'],
        },
        image: {
          fields: ['url', 'alternativeText', 'width', 'height'],
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

export const getProductMeta = async (slug: string) => {
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
          fields: ['url', 'alternativeText', 'width', 'height'],
        },
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
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IMetaDataProduct[] = await Axios.get(`/api/products?${query}`)
  return data[0]
}
