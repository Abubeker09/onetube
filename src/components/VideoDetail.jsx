import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams()

  useEffect(()=> {
    fetchFromAPI(`videos?part,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items))
  }, [id])

  if(!VideoDetail?.snippet || !videos) return 'Loading...'

  const { snippet: { title, channelId, channelTitle, thumbnails }, statistics: { viewCount, likeCount } } = VideoDetail

  return (
    <Box minHeight="90vh">
      <Stack>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:0}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography display='flex' alignItems='center' color='#fff' variant={{sm:'subtitel', md:'h6'}} fontFamily='arial'>
                  <img src={thumbnails.high.url} alt="profile" height={50} width={50} style={{borderRadius:'50%', marginRight:'5px'}} /> <span style={{fontSize:'15px'}}> {channelTitle} <CheckCircle sx={{fontSize:'12px', color:'gray'}}/> </span>
                </Typography>
              </Link>
              <Stack direction='row' gap='20px'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} • Views
                </Typography>
                |
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} • Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
           <Videos videos={videos} />
          </Box>

        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail