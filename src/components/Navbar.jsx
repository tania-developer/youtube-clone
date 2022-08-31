import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/sidebarinfo'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction="row"
    align="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justify: 'space-between',
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
