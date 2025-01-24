export const Row = ({ children }: { children: React.ReactNode[] }) => {
  return <div className={'grid grid-cols-4'}>{children}</div>
}
