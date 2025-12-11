import { Axios } from '../lib/api'

export interface IDataTopNav {
  topNav: INav
}

export interface IDataFooterNav {
  footer: INav[]
}

export interface INavSocItems {
  link: string
  icon: 'twitter' | 'facebook' | 'instagram' | 'linkedin'
}
export interface IDataSocNav {
  socNav: INavSocItems[]
}

export const getTopNav = async () => {
  // Simplified query using populate=deep to avoid 400 errors
  const data: IDataTopNav = await Axios.get('/api/navigation?populate=deep')
  return data
}

export const getFooterNav = async () => {
  // Simplified query using populate=deep
  const data: IDataFooterNav = await Axios.get('/api/navigation?populate=deep')
  return data
}

export const getSocNav = async () => {
  // Simplified query using populate=deep
  const data: IDataSocNav = await Axios.get('/api/navigation?populate=deep')
  return data
}
