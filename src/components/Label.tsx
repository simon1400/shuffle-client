import clsx from 'clsx'

export const Label = ({ big = false, data }: { big?: boolean; data: ILabelData }) => {
  const padding = clsx({ 'px-2.5': !big, 'px-5 py-1.5': big })

  return (
    <label
      className={`inline-block uppercase text-sm rounded-base ${padding}`}
      style={{ backgroundColor: data.color }}
    >
      {data.text}
    </label>
  )
}
