import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
    }}
  >
    <input className="search-bar" placeholder="Search..." onChange={() => {}} />
    <IconButton
      type="submit"
      sx={{ p: '5px', color: 'red' }}
      aria-label="search"
    >
      <SearchIcon />
    </IconButton>
  </Paper>
)

export default SearchBar
