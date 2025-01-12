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
      className={`inline-block rounded-base ${background} py-4 px-10.5 text-white text-lg ${className}`}
      href={href}
    >
      {text}
    </Link>
  )
}
