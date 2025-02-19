'use client'

export const Nav = ({ data, setHover }: { data: INav; setHover: (value: number) => void }) => {
  return (
    <nav className={'relative z-20'}>
      <ul>
        {data.items.map((item: INavItem, idx: number) => (
          <li key={item.title} className={'inline-block'}>
            <a
              onMouseEnter={() => setHover(idx)}
              // onMouseLeave={onMouseLeave}
              className={
                'block rounded-default hover:bg-lightAccent text-white text-nav px-3.5 py-1 duration-200'
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
