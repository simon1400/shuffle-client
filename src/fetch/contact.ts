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
<<<<<<< HEAD
}
export interface IMetaDataContact {
  title: string
=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
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
<<<<<<< HEAD
        contentBlock: {
          fields: ['title', 'contentText'],
          populate: {
            galery: {
=======
        metaData: {
          fields: ['title', 'description'],
          populate: {
            ogImage: {
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
              fields: ['url'],
            },
          },
        },
<<<<<<< HEAD
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
=======
        contentBlock: {
          fields: ['title', 'contentText'],
          populate: {
            galery: {
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
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

<<<<<<< HEAD
  const data: IMetaDataContact = await Axios.get(`/api/contact?${query}`)
=======
  const data: IDataContact = await Axios.get(`/api/contact?${query}`)
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
  return data
}
