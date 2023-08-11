import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import Link from "next/link"

import { MediaImage } from "components/media--image"

interface NodeRecipeTeaserProps {
  node: DrupalNode
}

export function NodeRecipeTeaser({ node, ...props }: NodeRecipeTeaserProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group"
      {...props}
    >
      <h2 className="flex-1 font-serif text-2xl">{node.title}</h2>
      {node.field_city && (
        <div className="flex space-x-0">
          <svg
            className="w-5 h-5"
            fill="#f73838"
            viewBox="0 0 600 600"
          >
            <path d="M213 1c0 .5-1.3 1-3 1-9.7 0-38.8 7.6-56.7 14.9-21 8.4-43.1 23.1-61.7 41.1-32.3 31.1-52 67.8-59.8 111.1-1.9 10.5-2.3 15.9-2.3 35.9 0 20.6.3 24.9 2.3 35 4.8 23.6 12.2 42.4 28.4 71.5C76.3 340.6 82 350.3 93.5 368c59.2 91.3 66.2 102.8 86.4 143 24.2 47.9 39.7 89.3 51.8 138l5.7 23.2 2.2-10.3c6.1-29.1 17.7-66.9 29.5-96 20.3-50.4 46.3-97.9 90.3-164.9 33.1-50.5 40.2-62.2 54.6-90.3 24.4-47.4 30.3-68.3 30.3-106.2-.1-34.7-6.4-62-20.9-90.6-23.1-45.3-61.7-80.7-107.4-98.2C297.2 8.5 271.4 2 261.4 2c-1.8 0-3.4-.5-3.4-1 0-.6-8.2-1-22.5-1S213 .4 213 1zm40.7 129c25.9 6.2 47 26.9 54 53 2.8 10.2 2.3 29.2-.9 39.2-7.9 24-25.6 41.4-49.8 49-6.3 1.9-9.7 2.3-20.5 2.3-17.4 0-26.4-2.7-40.7-12.2-12.5-8.2-22.5-21.3-28.1-36.6-2.6-7-3.1-10-3.5-20.8-.4-10.6-.1-13.8 1.7-20.8 10.1-38.9 49-62.4 87.8-53.1z"/>
          </svg>
          <span className="text-sm">
            {node.field_city}
          </span>
        </div>
      )}
      {node.field_dog_status && (
        <p className="text-sm capitalize text-gray-darker">
          <span className="font-semibold">{t("status")}:</span>{" "}
          <span className={node.field_dog_status == "Adopción" ? "text-lime-600" :""}>
            {node.field_dog_status}
          </span>
        </p>
      )}
      <MediaImage media={node.field_media_image} width={335} height={225} />
      <Link href={node.path.alias} passHref>
        <a className="inline-flex items-center uppercase hover:underline text-link">
          {t("view-dog")}
          <svg
            className="w-5 h-5 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </Link>
    </article>
  )
}
