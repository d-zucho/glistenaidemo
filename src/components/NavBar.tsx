'use client'
import WordMark from '@/components/WordMark'
import { Content } from '@prismicio/client'

type NavBarProps = {
  settings: Content.SettingsDocument
}

const NavBar = ({ settings }: NavBarProps) => {
  return (
    <div>
      <WordMark />
    </div>
  )
}

export default NavBar
