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
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHoverSub(-1)
  }, [pathname])

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0]
    if (openHamburger) {
      root.classList.add('overflow-y-hidden')
      setShowMobileMenu(true)
    } else {
      root.classList.remove('overflow-y-hidden')
      // Задержка для завершения анимации закрытия
      const timer = setTimeout(() => {
        setShowMobileMenu(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [openHamburger])

  useEffect(() => {
    setOpenHamburger(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Навигация становится sticky после 100px скролла
      setIsScrolled(scrollPosition > 100)
    }

    // Вызываем сразу для корректной инициализации
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 bg-[#0a0a1f]/95 backdrop-blur-md shadow-lg animate-slideDown'
            : 'absolute'
        }`}
      >
        <Container size={'lg'}>
          <div
            className={`flex justify-between items-center transition-all duration-500 ${
              isScrolled ? 'pt-3 md:pt-4 pb-3 md:pb-4' : 'pt-5 md:pt-16.5'
            }`}
          >
            <div className={'relative z-20'}>
              <Link
                href={'/'}
                className={`block transition-all duration-500 ${
                  isScrolled ? 'max-w-[120px] md:max-w-[180px]' : 'max-w-[180px] md:max-w-[295px]'
                }`}
              >
                <Logo />
              </Link>
            </div>
            <div className={'hidden md:block'}>
              {nav?.topNav && <Nav data={nav.topNav} setHover={setHoverSub} />}
              {hoverSub >= 0 &&
                nav?.topNav?.items?.[hoverSub]?.products &&
                nav.topNav.items[hoverSub].products.length > 0 && (
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
                color={'#ffd700'}
                size={isScrolled ? 24 : 27}
              />
            </div>
          </div>
        </Container>
      </header>
      {showMobileMenu && nav?.topNav && <MobileMenu data={nav.topNav} isOpen={openHamburger} />}
    </>
  )
}
