import clsx from 'clsx'

export const Label = ({ big = false, data }: { big?: boolean; data: ILabelData }) => {
  const padding = clsx({ 'px-1.5 md:px-2.5': !big, 'px-3.5 md:px-5 md:py-3.5': big })

  return (
    <label
      className={`inline-block uppercase text-[12px] md:text-sm font-bold rounded-base ${padding}`}
      style={{ backgroundColor: data.color }}
    >
      {data.text}
    </label>
  )
}
