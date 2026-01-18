import { Container } from 'components/Container'
import { Galery } from 'components/Galery'
import { LexicalRenderer } from 'components/LexicalRenderer'

export const ContentItem = ({
  data,
}: {
  data: {
    title?: string
    contentTextTest?: string
    galery?: IDataImage[]
  }
}) => {
  return (
    <section className={'py-[40px] md:py-[80px]'}>
      {(data.title?.length || data.contentTextTest) && (
        <Container size={'sm'}>
          {data.title?.length && (
            <h2 className={'text-5xl md:text-8xl mb-10 md:mb-17'}>{data.title}</h2>
          )}
          {data.contentTextTest && (
            <div className={'text-sm md:text-3xl mb-10 opacity-70'}>
              <LexicalRenderer content={data.contentTextTest} />
            </div>
          )}
        </Container>
      )}
      {data.galery?.length && <Galery data={data.galery} />}
    </section>
  )
}
