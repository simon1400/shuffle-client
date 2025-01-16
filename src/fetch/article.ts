import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataArticle {
  title: string
  fullMedia: IDataImage
  dynamicContent: any
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
      fields: ['title'],
      populate: ['fullMedia', 'metaData', 'dynamicContent'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataArticle[] = await Axios.get(`/api/products?${query}`)
  return data[0]
}
