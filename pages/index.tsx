import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { BlockBanner } from "components/block--banner"
import { NodeArticleCardAlt } from "components/node--article--card-alt"
import { NodeRecipeCard } from "components/node--recipe--card"
import { StatisticsCard } from "components/statistics-card"
import { Cake } from "components/cake"
import { Food } from "components/food"
import { House } from "components/house"
import { Cuting } from "components/cuting"
import { Croquettes } from "components/croquettes"
import { Albergues } from "components/albergues"
import { Rescue } from "components/rescue"

interface IndexPageProps extends LayoutProps {
  banner: DrupalBlock
  promotedArticles: DrupalNode[]
  promotedRecipes: DrupalNode[]
}

export default function IndexPage({
  banner,
  promotedArticles,
  promotedRecipes,
  menus,
  blocks,
}: IndexPageProps) {
  const { t } = useTranslation()
  const data =[
    {img_svg:{Cake}, qnty:"+ 55,000", description:"Perros alimentados"}
  ]

  return (
    <Layout meta={{ title: t("home") }} menus={menus} blocks={blocks}>
      <BlockBanner block={banner} />
      <div className="container grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        {promotedArticles?.length
          ? promotedArticles.map((node, index) => (
              <NodeArticleCardAlt
                node={node}
                key={node.id}
                className={classNames({
                  "col-span-1 sm:col-span-2 lg:col-span-1": index === 0,
                  "flex-col-reverse space-y-0 gap-4": index !== 0,
                })}
              />
            ))
          : null}
      </div>
      <div className="container hidden md:block ">
        <p className="py-10 font-serif text-3xl text-center text-text">
          {"Desde el 2010 y gracias a nuestros bienhechores, hemos realizado:"}
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <StatisticsCard img_svg={Food} qnty="+ 98,000" description="Lomitos alimentados" />
          <StatisticsCard img_svg={House} qnty="11,890" description="Adopciones" />
          <StatisticsCard img_svg={Cuting} qnty="10,000" description="Esterilizaciones" />
          <StatisticsCard img_svg={Croquettes} qnty="1000 T." description="Croquetas recolectadas" />
          <StatisticsCard img_svg={Albergues} qnty="72" description="Albergues apoyados" />
          <StatisticsCard img_svg={Rescue} qnty="980" description="Rescates" />
        </div>
      </div>
      {promotedRecipes?.length ? (
        <div className="container">
          <p className="py-10 font-serif text-3xl text-center text-text">
            {"Algunos de nuestros perritos en busca de familia. Adopta y cambia una vida:"}
          </p>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {promotedRecipes.map((node) => (
              <NodeRecipeCard node={node} key={node.id} />
            ))}
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const promotedArticles = await drupal.getResourceCollectionFromContext<
    DrupalNode[]
  >("node--article", context, {
    params: getParams("node--article", "card")
      .addFilter("promote", "1")
      .addPageLimit(3)
      .addSort("created", "DESC")
      .getQueryObject(),
  })

  const promotedRecipes = await drupal.getResourceCollectionFromContext<
    DrupalNode[]
  >("node--recipe", context, {
    params: getParams("node--recipe", "card")
      .addSort("created", "DESC")
      .addPageLimit(4)
      .getQueryObject(),
  })

  const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--banner_block",
    context,
    {
      params: getParams("block_content--banner_block")
        .addFilter("info", "Umami Home Banner")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      banner,
      promotedArticles,
      promotedRecipes,
    },
  }
}
