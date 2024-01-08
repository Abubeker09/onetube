import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Box } from '@mui/material'
import { ChannelCard, Videos } from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, #21007d, #00dcff, #21007d)', zIndex:10, height:'290px'}}/>
        <ChannelCard ChannelDetail={channelDetail} marginTop="-18rem" border='none'/>
      </Box>
      <Box display='flex' justifyContent='center' p="2" marginTop="35px">
        <Box>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail