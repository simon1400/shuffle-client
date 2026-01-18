interface IDataSmallCard {
  title: string
  text: string
  disable: boolean
  image: string
  link: string
  labels?: ILabelData[]
}

interface IDataImage {
  url: string
  name: string
  alternativeText?: string
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
  ogImage?: IDataImage
}

interface IDescriptionBlock {
  contentTextTest: string
  icon?: IDataImage
  cta: IDataLink
}

interface INav {
  title?: string
  items: INavItem[]
}

interface INavItem {
  title: string
  link: string
  products?: IShortProduct[]
}

interface IParameters {
  text?: string
  has?: boolean
  parameter: {
    title: string
  }
}

interface IShortProduct {
  title: string
  description: string
  shortIcon: IDataImage
  slug: string
  label: IDataLabel[]
  Parameters?: IParameters[]
}

interface IArticleShort {
  title: string
  slug: string
  shortContent?: string
  shortContentTest?: string
  shortImage?: IDataImage
  label?: IDataLabel[]
}

interface IVideoItem {
  youtubeUrl: string
  title?: string
}

interface IVideoGallery {
  title?: string
  videos: IVideoItem[]
}
