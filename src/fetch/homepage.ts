import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataHomepage {
  title: string
  products: {
    title: string
    shortIcon: IDataImage
    slug: string
    label: IDataLabel[]
  }
  dynamicContent: any
  metaData?: IMetaData
}

export const getHomepage = async () => {
  const query = qs.stringify(
    {
      fields: ['title'],
      populate: ['products', 'metaData', 'dynamicContent'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataHomepage = await Axios.get(`/api/homepage?${query}`)
  return data
}
