import { Container } from 'components/Container'
import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getArticle } from 'fetch/article'
import Image from 'next/image'

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const article = await getArticle(slug)
  return (
    <>
      <Top title={article.title} bigContent={article.fullContent} />
      <section>
        <Container size={'lg'}>
          <Image src={article.fullMedia.url} width={1400} height={800} alt={article.title} />
        </Container>
      </section>
      <DynamicContent data={article.dynamicComponents} />
    </>
  )
}
