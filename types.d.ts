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
