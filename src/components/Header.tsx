'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Logo } from '../icons/Logo'

import { Container } from './Container'
import { Nav } from './Nav'
import { SubMenu } from './SubMenu'

export const Header = () => {
  const [hoverSub, setHoverSub] = useState<boolean>(false)

  return (
    <header className={'absolute w-full z-50'}>
      <Container size={'lg'}>
        <div className={'flex justify-between items-center pt-16.5'}>
          <div className={'relative z-20'}>
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>
          <div>
            <Nav setHover={setHoverSub} />
            <SubMenu hover={hoverSub} setHover={setHoverSub} />
          </div>
        </div>
      </Container>
    </header>
  )
}
