import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataContact {
  title: string
  decripBlock: IDescriptionBlock[]
  contentBlock: {
    title: string
    contentText: string
    galery: IDataImage[]
  }
  metaData?: IMetaData
}

export const getContact = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
      populate: {
        decripBlock: {
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
        metaData: {
          fields: ['title', 'description'],
          populate: {
            ogImage: {
              fields: ['url'],
            },
          },
        },
        contentBlock: {
          fields: ['title', 'contentText'],
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
