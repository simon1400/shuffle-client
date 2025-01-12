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
            <div className={'relative z-10 py-[160px]'}>
              <h3 className={'text-8xl mb-16.5'}>
                {'Kontaktujte nás pro individuální nabídku pro vaše casíno'}
              </h3>
              <Button inverse text={'contact our reseler'} />
            </div>
          </Container>
        </div>
      </Container>
    </section>
  )
}
