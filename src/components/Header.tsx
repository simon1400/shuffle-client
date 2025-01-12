'use client'

import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'

import { Logo } from '../icons/Logo'

import { Container } from './Container'
import { MobileMenu } from './MobileMenu'
import { Nav } from './Nav'
import { SubMenu } from './SubMenu'

export const Header = () => {
  const [hoverSub, setHoverSub] = useState<boolean>(false)
  const [openHamburger, setOpenHamburger] = useState(false)

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
              <Nav setHover={setHoverSub} />
              <SubMenu hover={hoverSub} setHover={setHoverSub} />
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
      {openHamburger && <MobileMenu />}
    </>
  )
}
