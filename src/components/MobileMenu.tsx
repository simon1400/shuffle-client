'use client'
import { PlusIcon } from 'icons/Plus'
import { useEffect, useState } from 'react'

export const MobileMenu = ({ data, isOpen }: { data: INav; isOpen: boolean }) => {
  const [activeSub, setActiveSub] = useState<number>(-1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Запускаем анимацию появления после монтирования
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleSubMenu = (e: any, idx: number) => {
    e.preventDefault()
    setActiveSub(activeSub === idx ? -1 : idx)
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-primary w-screen h-screen pt-[80px] px-5 z-40 overflow-y-auto transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
