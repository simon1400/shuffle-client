import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataContact {
  title: string
  decripBlock: IDescriptionBlock[]
  contentBlock: {
    title: string
    contentTextTest: string
    galery: IDataImage[]
  }
}
export interface IMetaDataContact {
  title: string
  metaData?: IMetaData
}

export const getContact = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
      populate: {
        decripBlock: {
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
        contentBlock: {
          fields: ['title', 'contentTextTest'],
          populate: {
            galery: {
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

  const data: IDataContact = await Axios.get(`/api/contact?${query}`)
  return data
}

export const getContactMeta = async () => {
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

  const data: IMetaDataContact = await Axios.get(`/api/contact?${query}`)
  return data
}
