import clsx from 'clsx'

export const Container = ({
  children,
  size,
}: {
  children: React.ReactNode
  size: 'lg' | 'sm' | 'md'
}) => {
  const width = clsx({
    'max-w-[1441px]': size === 'lg',
    'max-w-[860px]': size === 'md',
    'max-w-[700px]': size === 'sm',
  })

  return <div className={`container mx-auto ${width} px-4`}>{children}</div>
}
