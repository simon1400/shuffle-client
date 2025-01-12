import { Container } from 'components/Container'
import { Top } from 'components/Top'
import { FacebookIcon } from 'icons/Facebook'
import { InstagramIcon } from 'icons/Instagram'
import { LinkedinIcon } from 'icons/Linkedin'
import { TwitterIcon } from 'icons/Twitter'

interface INavSocItems {
  link: string
  typeIcon: 'twitter' | 'facebook' | 'instagram' | 'linkedin'
}

const socItems: INavSocItems[] = [
  { link: '/asd1', typeIcon: 'facebook' },
  { link: '/asd2', typeIcon: 'instagram' },
  { link: '/asd3', typeIcon: 'twitter' },
  { link: '/asd4', typeIcon: 'linkedin' },
]

export default function Contact() {
  return (
    <>
      <Top title={'How can we help you today?'} blocks />
      <section className={'py-[130px]'}>
        <Container size={'sm'}>
          <div className={'mb-13'}>
            <h2 className={'text-8xl mb-17'}>{'Follow us'}</h2>
            <div className={'text-3xl opacity-70'}>
              <p>
                {
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam dictum tincidunt diam. Fusce suscipit libero eget elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Donec iaculis gravida nulla. Praesent vitae arcu tempor neque lacinia pretium. Nullam eget nisl. Quisque porta.'
                }
              </p>
            </div>
          </div>
          <nav>
            <ul className={'flex items-center gap-5'}>
              {socItems.map((item) => (
                <li key={item.link}>
                  <a
                    className={
                      'flex items-center justify-center w-[47px] h-[47px] bg-accent rounded-base'
                    }
                    href={item.link}
                    target={'_blank'}
                  >
                    {item.typeIcon === 'instagram' && <InstagramIcon />}
                    {item.typeIcon === 'facebook' && <FacebookIcon />}
                    {item.typeIcon === 'twitter' && <TwitterIcon />}
                    {item.typeIcon === 'linkedin' && <LinkedinIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>
    </>
  )
}
