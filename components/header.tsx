import * as React from "react"
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"

import siteConfig from "site.config"
import { Logo } from "components/logo"
// import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
// import { MenuUser } from "components/menu-user"
import { FormSearch } from "components/form--search"
import { SocialIcon } from "react-social-icons"

export interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[]
  }
}

export function Header({ menus }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)

  return (
    <header className="bg-white">
      <div className="container">
        <div className="grid items-center justify-between grid-cols-3 py-4 border-b border-gray-lighter md:py-6">
          <div>
            {/* <LocaleSwitcher /> */}
            <a className="sm:px-6 py-1 font-serif text-xl text-white
             transition-colors border-2 rounded-md
             bg-primary hover:bg-white hover:text-black border-primary"
             href="/como-ayudar">Donar aquí</a>
          </div>
          <div className="flex justify-center">
            <FormSearch />
          </div>
          <div className="flex justify-end">
            {/* <MenuUser /> */}
            <div className="flex space-x-4">
              <SocialIcon url="https://twitter.com/GdlCroqueton" target="_blank" style={{ height: 28, width: 28 }}/>
              <SocialIcon url="https://www.facebook.com/CroquetonGDL" target="_blank" style={{ height: 28, width: 28 }}/>
              <SocialIcon url="https://www.instagram.com/croquetongdl" target="_blank" style={{ height: 28, width: 28 }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-container mb-0 bg-inherit">

      <div className="container relative flex-wrap items-center justify-between pt-2 pb-0 md:flex lg:pt-2">
        <Link href="/" passHref>
          <a className="flex justify-start">
            <Logo className="w-48 h-18 text-primary lg:w-60"/>
            <span className="sr-only">{siteConfig.name}</span>
          </a>
        </Link>
        <button
          className="absolute transition-all border beorder-transparent md:hidden right-4 top-8 hover:border-link"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div
          className={classNames(
            "max-h-0 transition-all overflow-hidden md:max-h-screen",
            {
              "max-h-screen": showMenu,
            }
          )}
        >
          <MenuMain items={menus.main} />
        </div>
      </div>

      </div>
    </header>
  )
}
