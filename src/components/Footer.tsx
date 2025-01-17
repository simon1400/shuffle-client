import type { INavSocItems } from 'fetch/nav'

import { getFooterNav, getSocNav } from 'fetch/nav'

import { FacebookIcon } from '../icons/Facebook'
import { InstagramIcon } from '../icons/Instagram'
import { LinkedinIcon } from '../icons/Linkedin'
import { TwitterIcon } from '../icons/Twitter'

import { Container } from './Container'

interface INavItems {
  link: string
  title: string
}

const NavItem = ({
  title,
  items,
  content,
  socIcons,
}: {
  title?: string
  items?: INavItems[]
  socIcons?: INavSocItems[]
  content?: string
}) => {
  return (
    <div className={'mb-10 md:mb-0'}>
      {!!title && (
        <h5 className={'text-accent text-sm font-bold md:text-xxl mb-5 md:mb-8.5'}>{title}</h5>
      )}
      {items?.length && (
        <nav className={'md:mb-10'}>
          <ul>
            {items.map((item: INavItems) => (
              <li key={item.title} className={'mb-2'}>
                <a
                  className={'text-sm md:text-3xl opacity-70 hover:opacity-100 duration-200'}
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {content?.length && (
        <div className={'opacity-70 text-sm md:text-3xl'}>
          <p>{content}</p>
        </div>
      )}
      {socIcons?.length && (
        <nav>
          <ul className={'flex justify-center md:justify-start items-center gap-5'}>
            {socIcons.map((item) => (
              <li key={item.link}>
                <a href={item.link} target={'_blank'}>
                  {item.icon === 'instagram' && <InstagramIcon />}
                  {item.icon === 'facebook' && <FacebookIcon />}
                  {item.icon === 'twitter' && <TwitterIcon />}
                  {item.icon === 'linkedin' && <LinkedinIcon />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export const Footer = async () => {
  const nav = await getFooterNav()
  const socNav = (await getSocNav()).socNav
  return (
    <footer className={'py-11 md:py-[160px]'}>
      <Container size={'lg'}>
        <div className={'md:flex justify-around text-center md:text-left'}>
          {nav.footer.map((item) => (
            <NavItem key={item.title} title={item.title} items={item.items} />
          ))}
          <NavItem title={'Follow us'} socIcons={socNav} />
        </div>
      </Container>
    </footer>
  )
}
