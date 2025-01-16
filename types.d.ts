interface IDataSmallCard {
  title: string
  text: string
  disable: boolean
  image: string
  link: string
  labels?: ILabelData[]
}

interface ILabelData {
  color: string
  text: string
}

interface IDataImage {
  url: string
  name: string
}

interface IDataLink {
  text: string
  link: string
}

interface IDataLabel {
  text: string
  hexColor: string
  invertText: boolean
}

interface IDataParameter {
  parameter: {
    title: string
  }
  text?: string
  has?: boolean
}

interface IMetaData {
  title: string
  description?: string
  igImage?: IDataImage
}

interface IDescriptionBlock {
  contentText: string
  icon?: IDataImage
  cta: IDataLink
}

interface INavItem {
  title?: string
  items: {
    title: string
    link: string
    products?: {
      title: string
      shortIcon: IDataImage
      slug: string
      label: IDataLabel[]
    }[]
  }
}
