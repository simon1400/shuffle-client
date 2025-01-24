export const RowBodyHead = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 w-full'
      }
    >
      <span className={'text-2xl md:text-xxl font-medium'}>{content}</span>
    </div>
  )
}
