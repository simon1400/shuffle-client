import { Container } from 'components/Container'
import { Slider } from 'components/Slider'

export const DescriptionBlock = ({ data }: { data: { block: IDescriptionBlock[] } }) => {
  return (
    <section className={'pt-[80px] md:pt-[132px]'}>
      <Container size={'lg'}>
        <Slider data={data.block} />
      </Container>
    </section>
  )
}
