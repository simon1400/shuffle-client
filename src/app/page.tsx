import type { IDataHomepage } from 'fetch/homepage'

import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getHomepage } from 'fetch/homepage'

export default async function Home() {
  const homepage: IDataHomepage = await getHomepage()
  return (
    <>
      <Top title={homepage.title} items={homepage.products} />
      <DynamicContent data={homepage.dynamicContent} />
    </>
  )
}
