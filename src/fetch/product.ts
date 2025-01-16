import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataProduct {
  title: string
  description: string
  benefits: IDescriptionBlock[]
  image: IDataImage
  content: any
  compares: {
    title: string
    shortIcon: IDataImage
    slug: string
    label: IDataLabel[]
    Parameters: IDataParameter[]
  }
  metaData?: IMetaData
}

export const getProduct = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ['title', 'description', 'additionalDescription', 'content'],
      populate: ['benefits', 'metaData', 'compares', 'image'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataProduct[] = await Axios.get(`/api/products?${query}`)
  return data[0]
}
