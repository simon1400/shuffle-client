'use client'
import { PlusIcon } from 'icons/Plus'
import { useState } from 'react'

export const MobileMenu = ({ data }: { data: INav }) => {
  const [activeSub, setActiveSub] = useState<number>(-1)

  const handleSubMenu = (e: any, idx: number) => {
    e.preventDefault()
    setActiveSub(activeSub === idx ? -1 : idx)
  }

  return (
    <div className={'aboslute bg-primary w-screen h-screen pt-[150px] px-5'}>
      <nav className={'border-t-[1.5px] border-borderAccent'}>
        <ul>
          {data.items.map((item: INavItem, idx: number) => {
            return (
              <li key={item.title} className={'border-b-[1.5px] border-borderAccent'}>
                <a
                  className={'flex items-center justify-between text-6xl font-normal py-3.5'}
                  href={item.link}
                >
                  <span>{item.title}</span>
                  {!!item.products?.length && (
                    <span onClick={(e) => handleSubMenu(e, idx)}>
                      <PlusIcon />
                    </span>
                  )}
                </a>
                {idx === activeSub && !!item.products?.length && (
                  <ul className={'pb-4'}>
                    {item.products.map((subItem) => (
                      <li key={subItem.title}>
                        <a className={'flex py-2.5 gap-2'} href={`/${subItem.slug}`}>
                          <span className={'text-xs font-bold'}>{subItem.title}</span>
                          <span className={'text-[12px] text-accent'}>{subItem.description}</span>
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
