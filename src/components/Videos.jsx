import React from 'react'
import { ChannelCard, VideoCard } from './'
import { Box, Stack } from '@mui/material'

const Videos = ({ videos }) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} rowGap={6}>
        {videos.map((item, idx) => (
          <Box>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
          </Box>
        ))}
    </Stack>
  )
}

export default Videos