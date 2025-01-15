import { Button } from './Button'
import { Container } from './Container'

export const CtaSec = () => {
  return (
    <section className={'relative'}>
      <Container size={'lg'}>
        <div
          className={
            'after:bg-accent after:block after:absolute after:h-full after:w-full after:top-0 after:z-0 after:rounded-big'
          }
        >
          <Container size={'md'}>
            <div className={'relative z-10 pl-7.5 md:pl-0 py-[90px] md:py-[160px]'}>
              <h2 className={'text-5xl md:text-8xl mb-7.5 md:mb-16.5'}>
                {'Kontaktujte nás pro individuální nabídku pro vaše casíno'}
              </h2>
              <Button inverse text={'contact our reseler'} />
            </div>
          </Container>
        </div>
      </Container>
    </section>
  )
}
