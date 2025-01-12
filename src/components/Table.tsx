import { Container } from './Container'

export const Table = () => {
  return (
    <section className={'py-[160px]'}>
      <div>
        <Container size={'sm'}>
          <table className={'w-full text-left'}>
            <caption className={'text-left text-7xl mb-10'}>{'Specification'}</caption>
            <tbody>
              <tr className={'border-b-[1.5px] border-borderAccent '}>
                <th className={'text-3xl py-2'}>{'Lorem Ipsum'}</th>
                <td className={'text-right text-2xl'}>{'Lorem ipsum dolor sit amet'}</td>
              </tr>
              <tr className={'border-b-[1.5px] border-borderAccent'}>
                <th className={'text-3xl py-2'}>{'Lorem Ipsum'}</th>
                <td className={'text-right text-2xl'}>{'Lorem ipsum dolor sit amet'}</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </div>
    </section>
  )
}
