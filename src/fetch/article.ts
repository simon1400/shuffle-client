import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataArticle {
  title: string
  fullMedia: IDataImage
  fullContentTest: string
  dynamicComponents: any
  metaData?: IMetaData
}

export interface IMetaDataArticle {
  title: string
  fullMedia: IDataImage
  metaData?: IMetaData
}

export const getArticle = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ['title', 'fullContentTest'],
      populate: {
        fullMedia: {
          fields: ['url'],
        },
        dynamicComponents: {
          on: {
            'content.cta-block': {
              populate: '*',
            },
            'content.short-artciles': {
              populate: {
                articles: {
                  fields: ['title', 'shortContentTest', 'slug'],
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
                  fields: ['contentTextTest'],
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
              fields: ['title', 'contentTextTest'],
              populate: {
                galery: {
                  fields: ['url'],
                },
              },
            },
            'content.image-text-cta': {
              fields: ['title', 'textTest'],
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
      encodeValuesOnly: true,
    },
  )

  const data: IDataArticle[] = await Axios.get(`/api/articles?${query}`)
  return data[0]
}
export const getArticleMeta = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ['title'],
      populate: {
        fullMedia: {
          fields: ['url'],
        },
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
      encodeValuesOnly: true,
    },
  )

  const data: IMetaDataArticle[] = await Axios.get(`/api/articles?${query}`)
  return data[0]
}
