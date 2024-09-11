import NavBar from '@/components/NavBar'
import { createClient } from '@/prismicio'

const Header = async () => {
  const client = createClient()
  const settings = await client.getSingle('settings')
  return (
    <div>
      <NavBar settings={settings} />
    </div>
  )
}

export default Header
