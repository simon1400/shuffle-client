'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ProductsDesktop } from './ProductsDesktop'
import { ProductsMobile } from './ProductsMobile'

export const Products = ({ data }: { data: IShortProduct[] }) => {
  const [parameters, setParameters] = useState<any>({})
  const [isClient, setIsClient] = useState(false)

  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  useEffect(() => {
    setIsClient(true)

    const paramNames: string[] = []
    for (const product of data) {
      if (product.Parameters)
        for (const parameterProduct of product.Parameters) {
          paramNames.push(parameterProduct.parameter.title)
        }
    }

    const uniqParamsName = [...new Set(paramNames)]
    const paramValue: any = {}

    for (const paramName of uniqParamsName) {
      paramValue[paramName] = data.map((product) => {
        const findParam = product.Parameters?.find((el) => el.parameter.title === paramName)
        return findParam?.text || findParam?.has || ''
      })
    }

    setParameters(paramValue)
  }, [data])

  if (!isClient) {
    // Пока клиентское состояние не установлено, возвращаем пустую разметку
    return null
  }

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
