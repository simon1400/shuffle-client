import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getCompare } from 'fetch/compare'

export default async function Compare() {
  const compare = await getCompare()
  return (
    <>
      <Top title={compare.title} bigContent={compare.contentText} />
      <DynamicContent data={compare.dynamicContent} />
    </>
  )
}
