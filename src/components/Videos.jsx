import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import Loader from './Loader'
import VideoCard from './VideoCard'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
