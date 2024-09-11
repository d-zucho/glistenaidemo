'use client'
import WordMark from '@/components/WordMark'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import ButtonLink from './ ButtonLink'

type NavBarProps = {
  settings: Content.SettingsDocument
}

const NavBar = ({ settings }: NavBarProps) => {
  return (
    <nav className='p-4 md:p6' aria-label='Main'>
      <div className='mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center'>
        <Link href='/'>
          <WordMark />
          <span className='sr-only'>Glisten.ai Home Page</span>
        </Link>
        <ul className='flex gap-6'>
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              )
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className='inline-flex min-h-11 items-center'
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
