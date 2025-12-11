import { Axios } from '../lib/api'

export interface IDataHomepage {
  title: string
  products: IShortProduct[]
  dynamicContent: any
}

export interface IMetaDataHomepage {
  title: string
  metaData?: IMetaData
}

export const getHomepage = async () => {
  // Simplified query using populate=deep to avoid 400 errors from complex nested populates
  const data: IDataHomepage = await Axios.get('/api/homepage?populate=deep')
  return data
}

export const getHomepageMeta = async () => {
  // Simplified query using populate=deep
  const data: IMetaDataHomepage = await Axios.get('/api/homepage?populate=deep')
  return data
}
