import type { INavSocItems } from 'fetch/nav'
import type { Metadata } from 'next'

import { Container } from 'components/Container'
import { Galery } from 'components/Galery'
import { Top } from 'components/Top'
import { getContact, getContactMeta } from 'fetch/contact'
import { getSocNav } from 'fetch/nav'
import parse from 'html-react-parser'
import { FacebookIcon } from 'icons/Facebook'
import { InstagramIcon } from 'icons/Instagram'
import { LinkedinIcon } from 'icons/Linkedin'
import { TwitterIcon } from 'icons/Twitter'

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getContactMeta()

  return {
    title: meta.metaData?.title || meta.title,
    description: meta.metaData?.description || '',
    openGraph: meta.metaData?.ogImage
      ? {
          images: [meta.metaData.ogImage.url],
        }
      : null,
  }
}

export default async function Contact() {
  const contact = await getContact()
  const socNav: INavSocItems[] = (await getSocNav()).socNav
  return (
    <>
      <Top title={contact.title} blocks={contact.decripBlock} />
      <section className={'py-[130px]'}>
        <Container size={'sm'}>
          <div className={'mb-13'}>
            <h2 className={'text-8xl mb-17'}>{contact.contentBlock.title}</h2>
            <div className={'text-3xl opacity-70'}>{parse(contact.contentBlock.contentText)}</div>
            {!!contact.contentBlock.galery?.length && <Galery data={contact.contentBlock.galery} />}
          </div>
          <nav>
            <ul className={'flex items-center gap-5'}>
              {socNav.map((item: INavSocItems) => (
                <li key={item.link}>
                  <a
                    className={
                      'flex items-center justify-center w-[47px] h-[47px] bg-accent rounded-base'
                    }
                    href={item.link}
                    target={'_blank'}
                  >
                    {item.icon === 'instagram' && <InstagramIcon />}
                    {item.icon === 'facebook' && <FacebookIcon />}
                    {item.icon === 'twitter' && <TwitterIcon />}
                    {item.icon === 'linkedin' && <LinkedinIcon />}
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
