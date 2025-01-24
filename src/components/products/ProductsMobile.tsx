import { Button } from 'components/Button'

import { RowBody } from './RowBody'
import { RowBodyHead } from './RowBodyHead'
import { RowHead } from './RowHead'

export const ProductsMobile = ({
  data,
  parameters,
  idx,
}: {
  data: IShortProduct
  parameters: any
  idx: number
}) => {
  return (
    <div>
      <RowHead data={data} />
      {Object.keys(parameters).map((key) => (
        <div key={key} className={'flex justify-between border-b-[1.5px] border-borderAccent'}>
          <RowBodyHead content={key} />
          <RowBody content={parameters[key][idx]} />
        </div>
      ))}
      {!!data.slug.length && (
        <div className={'text-center pt-10'}>
          <Button text={'discorver products'} href={`/${data.slug}`} />
        </div>
      )}
    </div>
  )
}
