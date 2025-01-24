import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataCatalog {
  title: string
  content: string
  metaData?: IMetaData
}

<<<<<<< HEAD
export interface IMetaDataCatalog {
  title: string
  metaData?: IMetaData
}

=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
export const getCatalog = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'content'],
      populate: ['metaData'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataCatalog = await Axios.get(`/api/catalog?${query}`)
  return data
}
<<<<<<< HEAD

export const getCatalogMeta = async () => {
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

  const data: IMetaDataCatalog = await Axios.get(`/api/catalog?${query}`)
  return data
}
=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
