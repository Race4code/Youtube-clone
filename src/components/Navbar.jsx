// import React from 'react'
import {Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import {SearchBar} from './'

function Navbar() {
  return (
   <Stack 
      // jusitifyContent={'space-between'}
      // gap={{xs:'150px',md:'830px',sm:'500px'}}
      direction ="row" 
      alignItems="center" 
      p={2} 
      sx={{position:'sticky',background:'#000',top:0,justifyContent:"space-between"}}
    >
    <Link to="/" style={{display:"flex",alignItems:"center"}}>
      <img src={logo} alt="logo" height={45}/>
    </Link>
    <SearchBar/>
   </Stack>
  )
}

export default Navbar
