import { Button } from 'components/Button'
import { Container } from 'components/Container'
import parse from 'html-react-parser'
import Image from 'next/image'

export const ImageTextCta = ({
  data,
}: {
  data: {
    image: IDataImage
    title: string
    text: string
    cta?: IDataLink
  }
}) => {
  return (
    <section className={'py-[10px] md:py-[80px]'}>
      <Container size={'lg'}>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center'}>
          <div className={'relative w-full aspect-[4/3] overflow-hidden rounded-lg'}>
            <Image
              src={data.image.url}
              alt={data.image.alternativeText || data.title}
              fill
              className={'object-cover'}
              sizes={'(max-width: 768px) 100vw, 50vw'}
            />
          </div>
          <div>
            <h2 className={'text-5xl md:text-8xl mb-7.5 md:mb-10'}>{data.title}</h2>
            <div className={'text-sm md:text-3xl mb-7.5 md:mb-10 opacity-70'}>
              {parse(data.text)}
            </div>
            {!!data.cta && <Button text={data.cta.text} href={data.cta.link} />}
          </div>
        </div>
      </Container>
    </section>
  )
}
