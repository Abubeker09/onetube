import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({ChannelDetail, marginTop}) => (

  <Box sx={{boxShadow: '0px 0px 10px -2px grey', borderRadius: '20px', display:'flex', justifyContent:'center', alignItems:'center',alignSelf:'center', width:{xs:'280px', md:'285px'}, margin:'auto', maxHeight:'290px', marginTop: marginTop}}>
    <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
        <CardMedia
          image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={ChannelDetail?.snippet?.title}
          sx={{borderRadius:'50%', height:'190px', width:'190px', mb:2, border:'1px solid #e3e3e3'}} 
        />
        <Typography variant='h6'>
          {ChannelDetail?.snippet.title}
          <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5px'}}/>
        </Typography>
        {ChannelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard