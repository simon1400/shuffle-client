import { Container } from './Container'
import { LexicalRenderer } from './LexicalRenderer'
import { LinkMore } from './LinkMore'

export const TextCta = ({ data }: { data: { text?: string; cta?: IDataLink } }) => {
  return (
    <section className={'py-[80px] md:py-[132px]'}>
      <Container size={'md'}>
        <div className={'text-xl md:text-6xl mb-7.5 md:mb-10 opacity-70'}>
          <LexicalRenderer content={data.text} />
        </div>
        {!!data.cta && <LinkMore text={data.cta.text} href={data.cta.link} />}
      </Container>
    </section>
  )
}
