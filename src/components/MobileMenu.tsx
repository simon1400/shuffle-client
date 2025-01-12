'use client'
import { PlusIcon } from 'icons/Plus'
import { useState } from 'react'

interface INavData {
  title: string
  link: string
  subMenu?: {
    title: string
    link: string
    label: string
  }[]
}

const data: INavData[] = [
  {
    title: 'products',
    link: '/products',
    subMenu: [
      { title: 'SK2 Max', link: '/sk2-max', label: 'singlek shufler' },
      { title: 'SK3', link: '/sk2-max', label: 'singlek shufler' },
    ],
  },
  {
    title: 'accessories',
    link: '/accessories',
  },
  {
    title: 'about us',
    link: '/about-us',
  },
]

export const MobileMenu = () => {
  const [activeSub, setActiveSub] = useState<number>(-1)

  const handleSubMenu = (e: any, idx: number) => {
    e.preventDefault()
    setActiveSub(activeSub === idx ? -1 : idx)
  }

  return (
    <div className={'aboslute bg-primary w-screen h-screen pt-[150px] px-5'}>
      <nav className={'border-t-[1.5px] border-borderAccent'}>
        <ul>
          {data.map((item: INavData, idx: number) => {
            return (
              <li key={item.title} className={'border-b-[1.5px] border-borderAccent'}>
                <a
                  className={'flex items-center justify-between text-6xl font-normal py-3.5'}
                  href={item.link}
                >
                  <span>{item.title}</span>
                  {item.subMenu && (
                    <span onClick={(e) => handleSubMenu(e, idx)}>
                      <PlusIcon />
                    </span>
                  )}
                </a>
                {idx === activeSub && item.subMenu && (
                  <ul className={'pb-4'}>
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.title}>
                        <a className={'flex py-2.5 gap-2'} href={subItem.link}>
                          <span className={'text-xs font-bold'}>{subItem.title}</span>
                          <span className={'text-[12px] text-accent'}>{subItem.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
