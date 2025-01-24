import { CheckIcon } from '../../icons/Check'
import { XMarkIcon } from '../../icons/XMark'

export const RowBody = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 text-right md:text-center w-full'
      }
    >
      <span className={'inline-block text-base md:text-3xl ml-auto md:mx-auto'}>
        {content === true && <CheckIcon />}
        {content === false && <XMarkIcon />}
        {typeof content === 'string' && <span className={'opacity-70'}>{content}</span>}
      </span>
    </div>
  )
}
