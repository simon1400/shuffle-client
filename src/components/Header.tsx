'use client'

import type { IDataTopNav } from 'fetch/nav'

import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Logo } from '../icons/Logo'

import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import { Nav } from './Nav'
import { SubMenu } from './SubMenu'

export const Header = ({ nav }: { nav: IDataTopNav }) => {
  const [hoverSub, setHoverSub] = useState<number>(-1)
  const [openHamburger, setOpenHamburger] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHoverSub(-1)
  }, [pathname])

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0]
    if (openHamburger) {
      root.classList.add('overflow-y-hidden')
    } else {
      root.classList.remove('overflow-y-hidden')
    }
  }, [openHamburger])

  useEffect(() => {
    setOpenHamburger(false)
  }, [pathname])

  return (
    <>
      <header className={'absolute w-full z-50'}>
        <Container size={'lg'}>
          <div className={'flex justify-between items-center pt-5 md:pt-16.5'}>
            <div className={'relative z-20'}>
              <Link href={'/'} className={'block max-w-[180px] md:max-w-[295px]'}>
                <Logo />
              </Link>
            </div>
            <div className={'hidden md:block'}>
              {nav?.topNav && <Nav data={nav.topNav} setHover={setHoverSub} />}
              {nav?.topNav?.items?.[hoverSub]?.products?.length && (
                <SubMenu
                  data={nav.topNav.items[hoverSub].products}
                  hover={hoverSub}
                  setHover={setHoverSub}
                />
              )}
            </div>
            <div className={'md:hidden'}>
              <Hamburger
                toggled={openHamburger}
                toggle={setOpenHamburger}
                color={'#b046f1'}
                size={27}
              />
            </div>
          </div>
        </Container>
      </header>
      {openHamburger && nav?.topNav && <MobileMenu data={nav.topNav} />}
    </>
  )
}
