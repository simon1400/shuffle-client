import { Container } from 'components/Container'
import { Galery } from 'components/Galery'
import parse from 'html-react-parser'

export const ContentItem = ({
  data,
}: {
  data: {
    title?: string
    contentText?: string
    galery?: IDataImage[]
  }
}) => {
  return (
    <section className={'py-[160px]'}>
      {(data.title?.length || data.contentText?.length) && (
        <Container size={'sm'}>
          {data.title?.length && (
            <h2 className={'text-5xl md:text-8xl mb-10 md:mb-17'}>{data.title}</h2>
          )}
          {data.contentText?.length && (
            <div className={'text-sm md:text-3xl mb-10 opacity-70'}>{parse(data.contentText)}</div>
          )}
        </Container>
      )}
      {data.galery?.length && <Galery data={data.galery} />}
    </section>
  )
}
