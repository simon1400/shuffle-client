'use client'
const navItems = [
  { link: '/asd', title: 'products' },
  { link: '/asd', title: 'accessories' },
  { link: '/asd', title: 'about us' },
  { link: '/asd', title: 'contact' },
]

export const Nav = ({ setHover }: { setHover: (value: boolean) => void }) => {
  return (
    <nav className={'relative z-20'}>
      <ul>
        {navItems.map((item) => (
          <li key={item.title} className={'inline-block'}>
            <a
              onMouseEnter={() => setHover(true)}
              // onMouseLeave={onMouseLeave}
              className={
                'block rounded-default hover:bg-lightAccent text-white text-33xl px-3.5 py-1 duration-200'
              }
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
