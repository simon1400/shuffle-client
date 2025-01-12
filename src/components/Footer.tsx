import { FacebookIcon } from '../icons/Facebook'
import { InstagramIcon } from '../icons/Instagram'
import { LinkedinIcon } from '../icons/Linkedin'
import { TwitterIcon } from '../icons/Twitter'

import { Container } from './Container'

interface INavItems {
  link: string
  title: string
}

interface INavSocItems {
  link: string
  typeIcon: 'twitter' | 'facebook' | 'instagram' | 'linkedin'
}

const contactItems: INavItems[] = [
  { link: 'tel:+420 123 456 789', title: '+420 123 456 789' },
  { link: 'mailto:info@info.com', title: 'info@info.com' },
]

const productItems: INavItems[] = [
  { link: '/asd', title: 'SK2 MAX' },
  { link: '/asd', title: 'SK2 original' },
  { link: '/asd', title: 'SK2 GOLD' },
  { link: '/asd', title: 'SK6' },
  { link: '/asd', title: 'SK8' },
  { link: '/asd', title: 'SK1' },
]

const linksItems: INavItems[] = [
  { link: '/asd', title: 'Compare products' },
  { link: '/asd', title: 'Accessories' },
  { link: '/asd', title: 'About us' },
  { link: '/asd', title: 'Contact' },
  { link: '/asd', title: 'User area' },
  { link: '/asd', title: 'Cookies settings' },
]

const socItems: INavSocItems[] = [
  { link: '/asd1', typeIcon: 'facebook' },
  { link: '/asd2', typeIcon: 'instagram' },
  { link: '/asd3', typeIcon: 'twitter' },
  { link: '/asd4', typeIcon: 'linkedin' },
]

const NavItem = ({
  title,
  items,
  content,
  socIcons,
}: {
  title: string
  items?: INavItems[]
  socIcons?: INavSocItems[]
  content?: string
}) => {
  return (
    <div>
      <h5 className={'text-accent text-xxl mb-8.5'}>{title}</h5>
      {items?.length && (
        <nav className={'mb-10'}>
          <ul>
            {items.map((item: INavItems) => (
              <li key={item.title} className={'mb-2'}>
                <a className={'text-3xl opacity-70 hover:opacity-100'} href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {content?.length && (
        <div className={'opacity-70 text-3xl'}>
          <p>{content}</p>
        </div>
      )}
      {socIcons?.length && (
        <nav>
          <ul className={'flex items-center gap-5'}>
            {socIcons.map((item) => (
              <li key={item.link}>
                <a href={item.link} target={'_blank'}>
                  {item.typeIcon === 'instagram' && <InstagramIcon />}
                  {item.typeIcon === 'facebook' && <FacebookIcon />}
                  {item.typeIcon === 'twitter' && <TwitterIcon />}
                  {item.typeIcon === 'linkedin' && <LinkedinIcon />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className={'py-[160px]'}>
      <Container size={'lg'}>
        <div className={'flex justify-around'}>
          <NavItem title={'Contact'} items={contactItems} content={'Address'} />
          <NavItem title={'Products'} items={productItems} />
          <NavItem title={'Links'} items={linksItems} />
          <NavItem title={'Follow us'} socIcons={socItems} />
        </div>
      </Container>
    </footer>
  )
}
