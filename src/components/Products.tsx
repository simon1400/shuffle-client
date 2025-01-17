'use client'
import { useOnMountUnsafe } from 'helpers/useOnMountUnsaf'
import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { CheckIcon } from '../icons/Check'
import { XMarkIcon } from '../icons/XMark'

import { Button } from './Button'
import { Label } from './Label'

const RowHead = ({ data }: { data: IShortProduct }) => {
  return (
    <div className={'text-center pb-11 w-full md:mx-6'}>
      <Image
        className={'mx-auto mb-2.5'}
        src={data.shortIcon?.url || ''}
        width={160}
        height={115}
        alt={data.title}
      />
      <h3 className={'text-sm font-bold md:text-lg mb-0.5'}>{data.title}</h3>
      <span className={'block text-base1 text-accent mb-5'}>{data.description}</span>
      {!!data.label?.length && data.label.map((label) => <Label key={label.text} data={label} />)}
    </div>
  )
}

const RowBodyHead = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 w-full'
      }
    >
      <span className={'text-base md:text-xxl font-medium'}>{content}</span>
    </div>
  )
}
const RowBody = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 text-right md:text-center w-full'
      }
    >
      <span className={'inline-block text-base md:text-2xl ml-auto md:mx-auto'}>
        {content === true && <CheckIcon />}
        {content === false && <XMarkIcon />}
        {typeof content === 'string' && content}
      </span>
    </div>
  )
}

const Row = ({ children }: { children: React.ReactNode[] }) => {
  return <div className={'grid grid-cols-4'}>{children}</div>
}

const ProductsDesktop = ({ data, parameters }: { data: IShortProduct[]; parameters: any }) => {
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

const ProductsMobile = ({
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

export const Products = ({ data }: { data: IShortProduct[] }) => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  const [parameters, setParameters] = useState({})

  useOnMountUnsafe(async () => {
    const paramNames: string[] = []
    data.map((product) => {
      product.Parameters?.map((parameterProduct) => {
        paramNames.push(parameterProduct.parameter.title)
        return null
      })

      return null
    })
    const uniqParamsName = [...new Set(paramNames)]
    const paramValue: any = {}

    for (let i = 0; i < uniqParamsName.length; i++) {
      paramValue[`${uniqParamsName[i]}`] = []
      data.map((product, idx) => {
        const findParam = product.Parameters?.find((el) => el.parameter.title === uniqParamsName[i])
        paramValue[`${uniqParamsName[i]}`].push(findParam?.text || findParam?.has)
        return null
      })
    }
    setParameters(paramValue)
  })

  if (isDesktopMedia) {
    return <ProductsDesktop data={data} parameters={parameters} />
  } else {
    return (
      <>
        {data.map((product, idx) => (
          <ProductsMobile key={product.title} data={product} parameters={parameters} idx={idx} />
        ))}
      </>
    )
  }
}
