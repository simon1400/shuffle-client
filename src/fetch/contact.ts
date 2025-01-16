import qs from 'qs'

import { Axios } from '../lib/api'

export interface IDataContact {
  title: string
  descripBlock: IDescriptionBlock[]
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
      populate: ['metaData', 'contentBlock', 'descripBlock'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const data: IDataContact = await Axios.get(`/api/contact?${query}`)
  return data
}
