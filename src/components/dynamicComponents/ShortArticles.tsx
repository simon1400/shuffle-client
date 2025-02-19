import type { IProductArticle } from 'components/ArticleShort'

import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'

export const ShortArticles = ({ data }: { data: { articles: IProductArticle[] } }) => {
  return (
    <section className={'py-[40px] md:py-[80px]'}>
      <Container size={'lg'}>
        {data.articles.map((article: IProductArticle, idxArticle: number) => (
          <ArticleShort
            key={article.title + idxArticle}
            data={article}
            reverse={!!(idxArticle % 2)}
          />
        ))}
      </Container>
    </section>
  )
}
