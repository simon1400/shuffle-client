'use client'
import Link from 'next/link'

import { ArrowRight } from '../icons/ArrowRight'

export const LinkMore = ({ text, href = '/' }: { text: string; href?: string }) => {
  return (
    <Link
      className={
        'text-accent font-bold text-xs md:text-lg hover:text-cta inline-flex items-center gap-5 group '
      }
      href={href}
    >
      <span>{text}</span>
      <span className={'duration-300 group-hover:translate-x-2'}>
        <ArrowRight className={''} />
      </span>
    </Link>
  )
}
