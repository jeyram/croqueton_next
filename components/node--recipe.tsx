import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
// import Link from "next/link"

import { MediaImage } from "components/media--image"
import { Breadcrumbs } from "components/breadcrumbs"
import { FormattedText } from "components/formatted-text"

interface NodeRecipeProps {
  node: DrupalNode
}

export function NodeRecipe({ node, ...props }: NodeRecipeProps) {
  const { t } = useTranslation()

  return (
    <div className="container" {...props}>
      <Breadcrumbs
        items={[
          {
            title: t("our-dogs"),
            url: "/nuestros-perros",
          },
          {
            title: node.title,
          },
        ]}
      />
      <article className="p-6 bg-white border border-border sm:p-9 text-text">
        <div className="flex flex-col space-y-4">
          <h1 className="font-serif text-4xl">{node.title}</h1>
          {/* {node.field_recipe_category?.length ? (
            <div className="flex space-x-2">
              <span className="font-semibold">{t("recipe-category")}: </span>
              {node.field_recipe_category.map((tag) => (
                <Link key={tag.id} href={tag.path.alias} passHref>
                  <a className="underline transition-colors text-link hover:text-primary hover:bg-border">
                    {tag.name}
                  </a>
                </Link>
              ))}
            </div>
          ) : null} */}
          {/* {node.field_tags?.length ? (
            <div className="flex space-x-2">
              <span className="font-semibold">{t("tags")}: </span>
              {node.field_tags.map((tag) => (
                <Link key={tag.id} href={tag.path.alias} passHref>
                  <a className="underline transition-colors text-link hover:text-primary hover:bg-border">
                    {tag.name}
                  </a>
                </Link>
              ))}
            </div>
          ) : null} */}
          {node.field_summary && (
            <div>
              <FormattedText text={node.field_summary.processed} />
            </div>
          )}
        </div>
        <div className="grid gap-4 py-10 lg:grid-cols-2">
          <MediaImage media={node.field_media_image} width={770} height={512} />
          <div className="grid gap-4 lg:grid-cols-2">
            {node.field_preparation_time && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  className="w-10 h-10 lg:w-14 lg:h-14 text-primary"
                  fill="currentColor"
                  viewBox="0 0 600 600"
                  >
                  <path d="M143.8 83.7c-12.1 12-15.2 17.5-15.2 27.2.1 12.9 8 23.8 19.9 27.6 22.2 6.9 42.8-13.8 35.9-36.1-1.6-5.2-3-7.2-12.8-17.2-14.6-14.8-14.3-14.7-27.8-1.5zm21.3 19.7c4.1 5.5 4 11.6 0 15.7-2.4 2.4-3.8 2.9-7.6 2.9-4 0-5.2-.5-8.1-3.4-2.8-2.8-3.4-4.2-3.4-7.6 0-3.7.6-4.8 5.7-10.1l5.6-5.9 2.5 2.2c1.4 1.3 3.8 4.1 5.3 6.2zM234.4 85.2c-9.8 10-11.2 12-12.8 17.2-3.3 10.4-.6 21.4 7 29 18.1 18.1 48.7 5.3 48.8-20.5 0-9.7-3.1-15.2-15.2-27.2-13.5-13.2-13.2-13.3-27.8 1.5zm25.6 25.3c0 7.3-4.4 11.5-12.1 11.5-5.8 0-9.9-4.2-9.9-10.2 0-4.7 1.3-7.2 6.9-13.1l3.6-3.8 5.8 6c4.8 5 5.7 6.5 5.7 9.6zM335.5 75.8c-4.4 2.7-18.3 17.8-20.7 22.6-1.4 2.6-2.3 6.7-2.6 11.4-.4 6.6-.2 7.8 2.7 13.7 5.5 11.1 15.8 17.1 27.7 16.2 20-1.5 32.3-22.5 23.9-40.6-1.6-3.4-5.6-8.5-10.8-13.8-11.3-11.6-14.3-13.1-20.2-9.5zm15.6 31.3c2.9 7.1-2.6 14.9-10.5 14.9-4.8 0-8-1.9-10.2-6.2-2.5-4.8-1.1-9.2 4.8-15.5l5.2-5.4 4.7 4.7c2.6 2.6 5.3 6 6 7.5z"/>
                  <path d="M140.5 143.7c-1.1.3-3 1.4-4.2 2.6l-2.3 2v71.6l-26.7.3c-25.1.3-27.2.5-32.5 2.6-7.5 3-14.9 10.1-18.5 17.7l-2.8 6-.3 87.2-.3 87.3H28.7C.3 421 0 421.1 0 428.8c0 5.3.5 6.4 3.7 8.1 3.1 1.6 501.5 1.6 504.6 0 3.2-1.7 3.7-2.8 3.7-8.1 0-7.8-.1-7.8-30.7-7.8h-26.2l-.3-87.2-.3-87.3-2.7-5.7c-3-6.5-9.8-13.7-15.5-16.6-7-3.6-13.5-4.2-43.3-4.2h-29v-35.1c0-23.2-.4-35.7-1.1-37.1-2-3.7-6.9-4.8-21.6-4.8-7.6 0-15.5.5-17.5 1-6.9 2-6.8 1.4-6.8 40.7V220h-45V148.3l-2.6-2.4c-2.5-2.3-2.9-2.4-19.8-2.4-18.6 0-21.4.6-23.5 5.2-.7 1.6-1.1 13.7-1.1 36.8V220h-44v-34.5c0-39.1-.1-39.6-6.8-41.4-3.6-1.1-29.8-1.3-33.7-.4zm22.5 46.8V220h-12v-59h12v29.5zm92 0V220h-12v-59h12v29.5zm92 0V220h-13v-59h13v29.5zm82.7 50.1c6.1 4.5 7.3 7.7 7.3 18.9v10.3l-3.2 1.2c-1.8.7-7.4 5.5-12.4 10.7-8.8 9.1-9.1 9.3-13.7 9.3-4.5 0-4.8-.2-14.4-9.9-8.8-8.9-10.4-10.1-15.7-11.6-7.2-2.1-14.6-1.6-20.7 1.5-2.4 1.2-8.2 6.2-13 11.1-8.4 8.7-8.6 8.9-13.2 8.9-4.5 0-5.1-.3-10-5.7-13.2-14.5-17.1-16.8-28.7-16.8-9.9 0-14 2.2-25 13.6-8.3 8.5-8.8 8.9-13 8.9-4.2 0-4.8-.4-13.1-8.9-9.5-9.8-14-12.7-21.7-13.7-10.5-1.4-20.3 3.2-28.7 13.4-5.9 7.2-9 9.2-14 9.2-3.7 0-4.5-.6-12.5-8.9-4.7-4.9-10.5-9.8-12.9-11.1-6.1-3.1-13.4-3.6-20.7-1.5-5.3 1.5-6.9 2.7-15.7 11.6-9.6 9.7-9.9 9.9-14.4 9.9s-4.8-.2-13.7-9.3c-5-5.1-10.6-9.9-12.3-10.6l-3.3-1.3v-10c0-10.5.9-13.5 5.2-17.5 1.2-1.2 3.4-2.6 4.8-3.2 1.6-.6 61.5-.9 174.2-.8l171.7.2 2.8 2.1zm-277.8 54.3c10.9 11.3 15.1 13.5 25.1 13.6 10.1 0 14.3-2.3 25.1-13.5 8.5-8.9 8.6-9 13.4-9 4.9 0 5 .1 13.5 8.9 10.7 11.3 14.9 13.6 25 13.6 10 0 14.2-2.3 25.1-13.6 8.4-8.7 8.7-8.9 13.3-8.9 4.7 0 4.9.1 14.4 9.9 8.7 8.9 10.3 10.1 15.6 11.6 7.1 2.1 14.7 1.5 20.9-1.6 2.3-1.2 8-6.1 12.8-11 8.3-8.7 8.6-8.9 13.1-8.9 4.6 0 4.9.2 14.5 9.9 8.8 8.9 10.5 10.1 15.7 11.6 11.6 3.4 21.3.2 31.2-10.2l6.4-6.6V421H71V290.5l5.4 6c9.6 10.8 20.3 14.5 32.2 11 5.3-1.5 6.9-2.7 15.6-11.6 9.6-9.8 9.7-9.9 14.4-9.9 4.7 0 4.9.1 13.3 8.9z"/>
                </svg>
                <p className="font-semibold">{t("age")}:</p>
                <p className="lowercase">
                  {node.field_preparation_time} {t("months")}
                </p>
              </div>
            )}
            {node.field_cooking_time && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  className="w-10 h-10 lg:w-14 lg:h-14 text-primary"
                  fill="currentColor"
                  viewBox="0 0 800 800"
                >
                  <path d="M194.495 46.546c-21.363 5.765-46.236 21.395-68.745 43.2-30.056 29.117-45.908 55.571-52.322 87.32-7.557 37.399 12.589 68.922 48.039 75.167 16.719 2.945 35.729-3.78 47.477-16.797 3.36-3.723 19.336-26.569 35.502-50.769 32.258-48.29 33.008-49.927 25.746-56.173-4.261-3.666-9.643-4.063-13.97-1.032-1.672 1.17-15.619 20.983-30.994 44.029-30.393 45.556-35.185 51.692-43.228 55.355-17.445 7.945-39.889-3.254-45.55-22.726-4.033-13.876 1.784-38.711 13.819-58.989 22.028-37.116 68.764-74.636 95.658-76.795 7.587-.609 9.179-.258 16.452 3.618 8.735 4.656 30.572 21.591 44.064 34.173l8.444 7.873-6.258 8c-27.14 34.697-47.107 91.774-54.807 156.667-3.301 27.82-3.289 79.875.022 98 12.813 70.126 50.628 100.712 132.823 107.43 32.878 2.687 72.332-.128 97.941-6.987 23.102-6.188 38.241-14.074 52.831-27.521 28.619-26.377 40.135-65.961 38.088-130.922-2.659-84.338-23.633-153.859-60.805-201.54l-2.76-3.54 14.087-12.422c17.069-15.052 31.034-25.594 39.89-30.115 5.633-2.874 7.842-3.272 14.986-2.699 29.445 2.364 81.906 47.052 100.372 85.5 6.955 14.482 9.811 25.842 9.927 39.482.115 13.482-2.387 19.357-11.756 27.603-13.758 12.11-33.141 11.237-45.105-2.031-2.733-3.032-17.549-24.368-32.924-47.414-15.376-23.046-29.323-42.859-30.994-44.029-8.42-5.898-18.313.888-17.144 11.759.151 1.404 13.978 23.061 30.727 48.126 31.578 47.256 37.779 54.782 49.792 60.429 27.588 12.967 62.464-.245 75.873-28.744 8.561-18.195 5.924-47.17-6.731-73.973-24.411-51.699-92.06-104.342-129.299-100.618-15.54 1.554-39.039 16.775-68.779 44.55-8.082 7.548-9.387 8.315-11.509 6.761-17.177-12.576-30.426-19.482-46.042-23.999-9.338-2.702-13.571-3.086-34-3.086-20.387 0-24.67.387-33.921 3.066-12.886 3.731-29.358 11.856-39.966 19.714l-7.888 5.842-8.112-7.331c-15.73-14.215-36.226-30.267-46.113-36.112-17.066-10.091-26.525-11.703-42.838-7.3M688 79.333v6h16v264h-8.089c-8.037 0-8.085.024-7.666 3.667l.422 3.667H734l.422-3.667.422-3.667H717.333v-264h17.334v-12H688v6M393.634 92.555c71.155 13.614 118.284 108.364 118.352 237.941.028 52.874-7.66 79.753-28.856 100.891-20.899 20.841-54.282 29.946-109.797 29.946-85.511 0-122.053-21.764-134.971-80.389-2.717-12.328-2.998-17.13-2.988-50.944.008-28.48.584-41.602 2.427-55.333C250.409 180.726 283.288 120.461 334 98.342c16.672-7.272 40.027-9.539 59.634-5.787m-81.381 128.733c-9.303 5.839-10.524 18.396-2.564 26.356 5.418 5.418 11.837 6.759 18.679 3.9 10.853-4.535 13.677-19.448 5.273-27.852-5.43-5.429-14.876-6.491-21.388-2.404m102.092 2.72c-5.207 5.207-5.325 5.53-4.715 12.89.527 6.356 1.282 8.136 4.773 11.255 7.867 7.029 18.151 6.328 24.904-1.699 9.684-11.508 1.608-27.769-13.797-27.782-5.021-.005-6.56.731-11.165 5.336m-58.772 78.53c-19.812 6.547-30.918 21.814-27.394 37.658 2.786 12.524 11.658 20.608 29.545 26.921 2.898 1.022 1.705 3.853-5.248 12.459-6.565 8.125-17.064 12.927-26.544 12.14-6.274-.52-8.115-1.337-12.374-5.497-6.054-5.911-11.57-6.468-17.084-1.725-10.725 9.225 2.147 26.052 23.213 30.345 15.268 3.112 33.775-3.407 46.904-16.521l7.114-7.106 7.107 7.107c8.864 8.864 23.206 15.977 34.613 17.167 24.504 2.555 48.663-18.186 35.969-30.88-5.142-5.141-11.893-4.519-17.511 1.615-3.856 4.209-5.464 4.969-11.597 5.477-9.768.81-19.193-3.349-26.826-11.839-6.688-7.439-8.342-11.649-5.023-12.787 12.968-4.448 23.093-12.328 27.075-21.072 3.476-7.632 3.158-16.133-.911-24.296-3.835-7.698-9.189-12.289-20.21-17.335-10.377-4.751-29.399-5.604-40.818-1.831m33.814 24.156c12.558 6.406 8.625 14.752-8.79 18.655-11.403 2.555-28.665-3.33-29.652-10.11-.22-1.511 1.065-4.036 2.961-5.818 7.286-6.844 24.776-8.188 35.481-2.727m-266.969 22.548c-3.175 2.498-6.093 10.253-9.065 24.091-2.229 10.385-1.586 33.772 1.322 48.042 6.214 30.491 24.866 71.155 34.279 74.734 4.563 1.735 8.883.67 12.342-3.043 4.177-4.483 3.438-10.677-2.487-20.833-2.855-4.895-7.62-14.6-10.588-21.566-5.323-12.493-11.655-33.01-10.534-34.131.316-.317 2.865 2.883 5.663 7.111 10.072 15.218 33.018 36.055 42.26 38.374 4.676 1.174 11.228-2.681 12.949-7.619 1.891-5.425-.533-11.063-6.192-14.402-22.129-13.057-40.308-40.393-48.429-72.826-4.349-17.368-6.477-20.507-13.906-20.507-2.386 0-5.813 1.159-7.614 2.575m564.249 40.091c0 3.989.021 4 7.804 4h7.805l.851 63.667c.469 35.017.989 107.167 1.156 160.333l.304 96.667-5.627.41-5.627.41V726.667h36v-12h-5.375c-3.136 0-5.59-.694-5.89-1.667-.283-.917-.889-73.19-1.345-160.607l-.831-158.941 9.721-.393c9.502-.383 9.73-.475 10.142-4.059l.422-3.667h-49.51v4M222.75 465.37c-11.607 4.174-21.324 10.602-31.644 20.933-7.502 7.509-10.967 12.365-15.701 22-8.262 16.817-10.411 27.684-10.353 52.364.067 28.268 4.456 55.252 12.941 79.562 3.212 9.202 3.129 10.438-.703 10.438-1.246 0-6.535 2.136-11.754 4.747-16.334 8.171-23.561 20.037-23.502 38.586.042 13.432 3.625 22.112 12.587 30.495 11.61 10.859 23.28 15.202 44.073 16.398 16.223.934 26.048-1.19 35.46-7.666 8.037-5.53 11.179-10.02 11.179-15.977 0-3.874-.821-5.702-3.513-7.82-5.551-4.366-11.526-3.624-18.013 2.237l-5.535 5h-16.136c-14.971 0-16.684-.27-23.734-3.731-9.718-4.773-13.069-9.898-13.069-19.991 0-13.027 7.812-18.938 27.719-20.975 10.063-1.03 12.016-1.652 14.615-4.654 4.233-4.889 3.762-9.455-2.288-22.188-6.182-13.008-10.816-28.488-14.108-47.128-3.044-17.235-3.47-55.595-.725-65.333 6.32-22.426 21.715-39.094 42.631-46.157 4.501-1.52 9.077-4.04 10.17-5.6 3.084-4.404 2.501-11.183-1.286-14.971-4.018-4.017-9.291-4.172-19.311-.569m283.227.311c-2.904 2.499-3.844 4.473-3.844 8.08 0 6.343 2.971 9.314 12.934 12.935 34.475 12.532 48.076 40.549 43.675 89.971-2.639 29.644-7.54 49.629-17.535 71.511-4.14 9.064-5.002 12.183-4.053 14.667 2.311 6.044 5.934 7.892 17.889 9.125 18.874 1.947 27.608 8.618 27.619 21.096.014 15.947-13.257 24.267-38.704 24.267-12.143 0-13.205-.227-18.291-3.912-2.971-2.151-5.796-4.551-6.279-5.333-.483-.782-3.139-1.421-5.901-1.421-6.56 0-11.354 4.802-11.354 11.373 0 5.909 7.49 13.933 17.639 18.899 14.364 7.029 42.881 5.333 61.141-3.637 22.171-10.89 31.237-35.75 21.173-58.057-5.178-11.478-18.098-21.626-30.493-23.951-2.709-.508-4.926-1.235-4.926-1.614 0-.38 1.441-4.687 3.203-9.572 4.346-12.048 9.642-36.481 11.547-53.276 2.015-17.759.958-50.116-1.987-60.832-7.207-26.219-23.713-45.967-48.099-57.548-13.5-6.412-20.262-7.15-25.354-2.771m-221.371 46.925c-2.061 2.061-3.273 4.797-3.273 7.387 0 2.263 4.5 31.066 10 64.007s10 61.045 10 62.454c0 1.948-1.52 2.94-6.333 4.135-16.421 4.076-27.519 12.47-33.482 25.322-4.565 9.841-4.841 25.588-.612 34.919 8.467 18.679 26.868 28.734 55.094 30.103 23.206 1.126 39.054-3.917 51.538-16.401l5.972-5.972 7.248 6.625c13.636 12.462 28.614 17.039 51.648 15.782 23.557-1.286 40.326-8.948 49.796-22.75 5.837-8.509 7.551-15.424 6.83-27.55-1.228-20.631-14.477-35.219-36.454-40.137-6.912-1.547-7.315-1.855-6.651-5.088 3.963-19.301 20.687-125.47 20.12-127.729-2.012-8.017-12.247-10.961-18.7-5.38-3.312 2.864-3.966 5.982-14.416 68.735l-10.948 65.735-5.426 2.43c-9.151 4.097-10.616 12.785-3.271 19.403 2.454 2.21 5.547 2.759 19.192 3.405 20.324.962 27.74 3.887 31.644 12.484 6.177 13.603-.62 26.009-16.94 30.921-7.431 2.236-30.89 2.509-38.322.445-6.235-1.731-16.038-10.483-19.972-17.831-2.859-5.338-2.895-6.302-3.555-94.512l-.666-89.119-3.148-2.548c-4.392-3.555-11.202-3.266-15.778.669L362 515.768l-.667 89.116c-.659 88.129-.698 89.175-3.544 94.449-3.768 6.982-9.058 11.877-16.456 15.226-4.874 2.206-8.805 2.721-20.95 2.745-18.365.036-27.023-2.666-34.279-10.698-4.197-4.646-4.77-6.121-4.766-12.277.007-8.899 3.375-14.597 10.943-18.515 4.698-2.433 8.779-3.102 22.862-3.753 16.659-.77 17.233-.897 20.333-4.501 4.655-5.411 4.297-11.725-.912-16.108-2.256-1.899-5.192-3.452-6.524-3.452-1.905 0-2.706-1.636-3.752-7.667-.732-4.216-5.718-34.066-11.081-66.332-8.607-51.786-10.102-59.017-12.751-61.667-4.179-4.178-11.526-4.052-15.85.272" />
                </svg>
                <p className="font-semibold">{t("size")}:</p>
                <p className="lowercase">
                  {node.size} {t("")}
                </p>
              </div>
            )}
            {node.field_number_of_servings && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  fill="currentColor"
                  className="w-10 h-10 lg:w-14 lg:h-14 text-link"
                  viewBox="0 0 600 600"
                >
                  <defs />
                  <path d="M307.75 141c-85.1 0-154.84 73.58-154.84 163.8S222 468.6 307.75 468.6c85.1 0 154.2-73.58 154.2-163.8 0-90.86-69.11-163.8-154.2-163.8zm0 301.36c-71 0-129.25-62.06-129.25-138.2S236.09 166 307.75 166c71 0 128.61 62.06 128.61 138.2s-57.59 138.16-128.61 138.16z" />
                  <path d="M307.75 187.71c-60.14 0-109.41 52.47-109.41 116.45s49.26 116.45 109.41 116.45 109.41-52.47 109.41-116.45-49.27-116.45-109.41-116.45zm0 207.31c-46.07 0-83.82-40.95-83.82-90.86s37.75-90.86 83.82-90.86 83.82 40.95 83.82 90.86c0 50.55-37.76 90.84-83.82 90.84zM549 297.76l.64-160a13.36 13.36 0 0 0-5.12-10.24q-4.8-3.84-11.52-1.92c-1.92.64-46.07 14.08-46.07 92.78 0 37.11 2.56 64.62 6.4 79.34a23.65 23.65 0 0 0-3.84 13.44v139.52c0 13.44 10.88 24.31 23.67 24.31h14.72c13.44 0 23.67-10.88 23.67-24.31V310.56c1.25-4.48-.03-8.96-2.55-12.8zM524 166l-.64 119.65h-5.76c-1.92-8.32-4.48-28.15-4.48-67.82.01-25 5.13-41.64 10.88-51.83zm3.2 283.45h-10.87V311.84h10.88zm-400.53-323.8a12.83 12.83 0 0 0-12.8 12.8v46.71h-7v-46.72a12.8 12.8 0 0 0-25.59 0v46.71h-7.71v-46.71a12.8 12.8 0 0 0-25.59 0v59.5a3.85 3.85 0 0 0 .64 2.56v.64c0 .64.64 1.28.64 1.92v.64l20.47 34.55a25.13 25.13 0 0 0-7 17.92v194.51c0 13.44 10.88 24.31 23.67 24.31h14.72c13.44 0 23.67-10.88 23.67-24.31V255.53a25.66 25.66 0 0 0-7.68-17.92l19.83-33.27v-.64a2.35 2.35 0 0 0 .64-1.92v-.64c0-.64.64-1.92.64-2.56v-60.14c1.25-7.04-4.51-12.79-11.55-12.79zm-23 85.1L93.4 228l-10.23-17.26zM88.28 449.4v-190c1.92.64 3.2 1.28 5.12 1.28a18.68 18.68 0 0 0 5.76-1.28v190z" />
                </svg>
                <p className="font-semibold">{t("protocol")}:</p>
                <p>{node.field_number_of_servings}</p>
              </div>
            )}
            {node.field_number_of_servings && (
              <div className="flex items-center space-x-2 lg:flex-col">
                <svg
                  fill="currentColor"
                  className="w-10 h-10 lg:w-14 lg:h-14 text-link"
                  viewBox="0 0 600 600"
                >
                  <defs />
                  <path d="M299.29 118.57c-120.29 0-217.86 97.61-217.86 217.86a215.64 215.64 0 0 0 48.81 137.22 13.8 13.8 0 0 0 19.76 2.12c5.66-5 7.07-14.15 2.12-19.81a187.92 187.92 0 0 1-20.51-31.83l45.27-18.39a14.12 14.12 0 1 0-10.61-26.17l-46 18.39c-5-14.15-8.49-29-9.2-44.56h48.1a14.15 14.15 0 0 0 0-28.29h-48.74a165.28 165.28 0 0 1 8.49-46l43.85 18.39c2.12.71 3.54 1.41 5.66 1.41a14 14 0 0 0 12.73-8.49 14.36 14.36 0 0 0-7.78-18.39l-43.85-18.39A204.84 204.84 0 0 1 155 214.77l32.54 32.54a13.68 13.68 0 0 0 19.81 0 13.68 13.68 0 0 0 0-19.81l-33.24-33.24A211.56 211.56 0 0 1 213 167.38l17.68 42.44c2.12 5.66 7.78 8.49 13.44 8.49 2.12 0 3.54 0 5.66-1.41a15.46 15.46 0 0 0 3.54-2.12c-1.41 12-2.83 30.42-2.83 58 0 33.24.71 74.27 3.54 86.29a49.32 49.32 0 0 0 48.1 38.2 54.6 54.6 0 0 0 10.61-1.41c26.88-5.66 43.85-31.83 38.2-58-2.12-12-18.39-49.51-31.83-79.22-12.73-28.29-21.22-45.27-27.59-55.17 2.12 2.12 5.66 2.83 8.49 2.83a14.19 14.19 0 0 0 14.15-14.15v-44.58a202.27 202.27 0 0 1 46.68 9.2l-17.68 42.44a14.36 14.36 0 0 0 7.78 18.39c2.12.71 3.54 1.41 5.66 1.41a14 14 0 0 0 12.73-8.49L387 168.08a182.4 182.4 0 0 1 38.2 26.17L392 227.5a13.68 13.68 0 0 0 0 19.81 13.68 13.68 0 0 0 19.81 0l32.54-32.54c9.9 12 19.1 25.46 25.46 39.61l-43.85 18.39a14.36 14.36 0 0 0-7.78 18.39c2.12 5.66 7.78 8.49 13.44 8.49 2.12 0 3.54 0 5.66-1.41l43.85-17.68a233 233 0 0 1 8.49 45.27h-48.1a14.15 14.15 0 0 0 0 28.29h48.1a199.17 199.17 0 0 1-9.9 45.27l-45.27-19.1a14.12 14.12 0 0 0-10.61 26.17l44.56 18.39a207.78 207.78 0 0 1-21.93 33.24 13.8 13.8 0 0 0 2.12 19.81c2.83 2.12 5.66 3.54 9.2 3.54a12.73 12.73 0 0 0 10.61-5 217.33 217.33 0 0 0 50.22-139.34c-.76-120.92-99.08-218.53-219.33-218.53zm24 226.35a20.66 20.66 0 0 1-16.27 24c-11.32 2.12-22.63-5-24.76-15.56-2.12-12-3.54-71.44-2.12-110.34 16.32 35.41 40.37 90.58 43.2 101.9zM271.71 188.6h-2.83c-5 .71-8.49 2.83-11.32 9.9l-17.68-42.44a196.33 196.33 0 0 1 46-9.2v46c0 1.41 0 2.83.71 3.54-7.1-7.8-10.59-7.8-14.88-7.8z" />
                  <circle
                    cx="300.24"
                    cy="339.59"
                    r="9.2"
                    transform="rotate(-11.9 300.247 339.58)"
                  />
                </svg>
                <p className="font-semibold">{t("status")}:</p>
                <p className="capitalize">{node.field_difficulty}</p>
              </div>
            )}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* <div className="flex flex-col p-8 space-y-6 bg-body">
            <h2 className="pb-3 font-serif text-2xl border-b lg:text-3xl border-pink">
              {t("ingredients")}
            </h2>
            <ul className="divide-y divide-pink">
              {node.field_ingredients?.map((ingredients, index) => (
                <li key={index} className="py-2">
                  {ingredients}
                </li>
              ))}
            </ul>
          </div> */}
          <div className="flex flex-col space-y-6 md:col-span-2">
            <h3 className="pb-3 font-serif text-2xl border-b lg:text-3xl border-pink">
              {t("story")}
            </h3>
            {node.field_recipe_instruction && (
              <div className="prose prose-li:marker:text-primary prose-li:marker:text-2xl max-w-none text-text">
                <FormattedText text={node.field_recipe_instruction.processed} />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
