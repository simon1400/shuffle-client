import { Container } from 'components/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={'min-h-screen flex items-center justify-center'}>
      <Container size={'lg'}>
        <div className={'text-center'}>
          <h1 className={'text-8xl md:text-9xl font-bold text-accent mb-8'}>{'404'}</h1>
          <h2 className={'text-4xl md:text-6xl mb-6'}>{'Product Not Found'}</h2>
          <p className={'text-xl md:text-2xl text-gray-400 mb-11'}>
            {'The product you'}&apos;{'re looking for doesn'}&apos;
            {'t exist or has been removed.\r'}
          </p>
          <Link
            href={'/catalog'}
            className={
              'inline-block bg-accent hover:bg-lightAccent text-white px-8 py-4 rounded-default text-lg transition-colors duration-200'
            }
          >
            {'View All Products\r'}
          </Link>
        </div>
      </Container>
    </div>
  )
}
