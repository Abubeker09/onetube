import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet }}) => {

  return (
    <Card key={snippet.videoId} sx={{background: '#1e1e1e', width: {xs: '250px'}, height: 260, p: 2, borderRadius: '20px', boxShadow: '0px 0px 10px -2px grey', position:'relative'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 250, height: 140, borderStartStartRadius: '20px', borderTopRightRadius: '20px'}} />
      </Link>
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
      </Typography>
      <Link style={{display: 'flex', gap: '5px', alignItems:'center', position:'absolute', bottom:'10px', left:'10px'}} to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width: 50, height: 50, borderRadius: '50%'}} />
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '5px'}}/>
        </Typography>
      </Link>
    </Card>
  )
}

export default VideoCard