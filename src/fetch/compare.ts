import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataCompare {
  title: string
  contentText: string
  dynamicContent: any
  metaData?: IMetaData
}

export const getCompare = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'contentText'],
      populate: ['metaData', 'dynamicContent'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataCompare = await Axios.get(`/api/compare?${query}`)
  return data
}
