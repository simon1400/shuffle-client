import { Button } from 'components/Button'

import { Row } from './Row'
import { RowBody } from './RowBody'
import { RowBodyHead } from './RowBodyHead'
import { RowHead } from './RowHead'

export const ProductsDesktop = ({
  data,
  parameters,
}: {
  data: IShortProduct[]
  parameters: any
}) => {
  return (
    <div>
      <Row>
        <div />
        {data.map((product) => (
          <RowHead data={product} key={product.title} />
        ))}
      </Row>
      {Object.keys(parameters).map((key) => (
        <Row key={key}>
          <RowBodyHead content={key} />
          {parameters[key].map((value: boolean | string, idx: number) => (
            <RowBody key={key + value + idx} content={value} />
          ))}
        </Row>
      ))}
      <Row>
        <div />
        {data.map((product) => (
          <div
            key={`${product.title}_button`}
            className={'text-center md:pt-10 pt-2.5 md:mx-6 w-full'}
          >
            {!!product.slug.length && <Button text={'detail'} href={`/${product.slug}`} />}
          </div>
        ))}
      </Row>
    </div>
  )
}
