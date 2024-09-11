import NavBar from '@/components/NavBar'
import { createClient } from '@/prismicio'

const Header = async () => {
  const client = createClient()
  const settings = await client.getSingle('settings')
  // the getSingle method is a custom method that fetches a single document of a specific type
  // the settings type is a custom type that represents the settings document
  // a singleton is a document that is unique in the repository
  return (
    <header>
      <NavBar settings={settings} />
    </header>
  )
}

export default Header
