import { Container } from 'components/Container'
import { Slider } from 'components/Slider'

export const DescriptionBlock = ({ data }: { data: { block: IDescriptionBlock[] } }) => {
  return (
    <section className={'py-[40px] md:py-[80px]'}>
      <Container size={'lg'}>
        <Slider data={data.block} />
      </Container>
    </section>
  )
}
