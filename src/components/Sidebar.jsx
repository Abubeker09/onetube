import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({selectdCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row' sx={{overflowY: 'auto', height: {sx:'auto', md: '95%'}, flexDirection: {md: 'column'}}}>
      {categories.map((category)=>(
        <button className='category-btn' onClick={()=> setSelectedCategory(category.name)} style={{background: category.name === selectdCategory && '#FC1503', color: 'white', gap: '10px'}} key={category.name}>
          <span style={{ color: category.icon === selectdCategory ? 'white' : '#FC1503'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectdCategory ? 1 : 0.6}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar