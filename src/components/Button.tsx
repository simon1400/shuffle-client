'use client'
import clsx from 'clsx'
import Link from 'next/link'

export const Button = ({
  text,
  href = '/',
  className = '',
  inverse = false,
}: {
  text: string
  href?: string
  className?: string
  inverse?: boolean
}) => {
  const background = clsx({
    'bg-accent hover:bg-cta': !inverse,
    'bg-primary hover:bg-lightPrimary': inverse,
  })

  return (
    <Link
      className={`button-tm inline-block rounded-base ${background} py-3.5 px-6.5 md:py-4 md:px-10.5 duration-200 text-white text-xs font-bold md:text-lg ${className}`}
      href={href}
    >
      {text}
    </Link>
  )
}
